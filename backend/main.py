from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from rdkit import Chem
from rdkit.Chem import AllChem, Descriptors, Crippen, Lipinski
import numpy as np
import joblib
import torch

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = "cuda" if torch.cuda.is_available() else "cpu"

tokenizer = AutoTokenizer.from_pretrained("models/molt5")
molt5 = AutoModelForSeq2SeqLM.from_pretrained("models/molt5").to(device)
svr_model = joblib.load("models/svr_qsar_model.pkl")


class PromptInput(BaseModel):
    prompt: str
    num_molecules: int = 10


def generate_smiles_list(prompt, num_molecules):
    inputs = tokenizer(
        prompt,
        return_tensors="pt",
        padding=True,
        truncation=True,
        max_length=128
    ).to(device)

    outputs = molt5.generate(
        **inputs,
        max_length=128,
        num_beams=max(num_molecules, 10),
        num_return_sequences=num_molecules,
        do_sample=False
    )

    smiles_list = [
        tokenizer.decode(output, skip_special_tokens=True)
        for output in outputs
    ]

    return smiles_list


def extract_features(smiles):
    mol = Chem.MolFromSmiles(smiles)

    if mol is None:
        return None

    ecfp4 = AllChem.GetMorganFingerprintAsBitVect(mol, radius=2, nBits=2048)
    ecfp6 = AllChem.GetMorganFingerprintAsBitVect(mol, radius=3, nBits=2048)

    ecfp4_arr = np.array(ecfp4)
    ecfp6_arr = np.array(ecfp6)

    descriptors = np.array([
      float(Descriptors.MolWt(mol)),
      float(Crippen.MolLogP(mol)),
      float(Descriptors.TPSA(mol)),
      float(Lipinski.NumHDonors(mol)),
      float(Lipinski.NumHAcceptors(mol)),
      float(Lipinski.NumRotatableBonds(mol)),
      float(mol.GetRingInfo().NumRings()),
 ], dtype=np.float32)

    features = np.concatenate([ecfp4_arr, ecfp6_arr, descriptors])
    return features.reshape(1, -1)


@app.get("/")
def home():
    return {"message": "MolT5 + SVR backend is running"}


@app.post("/generate")
def generate_and_rank(data: PromptInput):
    raw_smiles = generate_smiles_list(data.prompt, data.num_molecules)

    results = []
    seen = set()

    for smi in raw_smiles:
        mol = Chem.MolFromSmiles(smi)

        if mol is None:
            continue

        canonical = Chem.MolToSmiles(mol)

        if canonical in seen:
            continue

        seen.add(canonical)

        features = extract_features(canonical)

        if features is None:
            continue

        pred = svr_model.predict(features)[0]

        results.append({
            "smiles": canonical,
            "predicted_pIC50": float(pred),
            "status": "Predicted Active" if float(pred) >= 5.5 else "Moderate/Low Activity"        })

    results = sorted(results, key=lambda x: x["predicted_pIC50"], reverse=True)

    return {
        "prompt": data.prompt,
        "requested": data.num_molecules,
        "valid_candidates": len(results),
        "top_candidates": results
    }