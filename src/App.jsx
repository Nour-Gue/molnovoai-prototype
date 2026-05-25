import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Atom,
  FlaskConical,
  ShieldCheck,
  Send,
  Database,
  Sparkles,
} from "lucide-react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [numMolecules, setNumMolecules] = useState(10);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const runDemo = () => {
    setLoading(true);
    setCandidates([]);
  
    setTimeout(() => {
      setCandidates([
        {
          smiles: "COc1ccccc1C1Oc2ccccc2C(c2ccccc2)O1",
          predicted_pIC50: 7.842,
          status: "Predicted Active",
        },
        {
          smiles: "CC(=O)Nc1ccc(O)c(OC)c1",
          predicted_pIC50: 7.315,
          status: "Predicted Active",
        },
        {
          smiles: "COc1ccc(NC(=O)c2ccccc2)cc1",
          predicted_pIC50: 6.984,
          status: "Moderately Active",
        },
        {
          smiles: "CC(C)NC(=O)c1ccc(O)cc1",
          predicted_pIC50: 6.721,
          status: "Moderately Active",
        },
        {
          smiles: "COc1ccccc1[C@@H]1Oc2ccccc2C(O)C1",
          predicted_pIC50: 6.438,
          status: "Moderate/Low Activity",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  const steps = [
    {
      title: "Data Collection",
      icon: <Database size={30} />,
      text: "Curated datasets from natural products and bioactivity sources.",
    },
    {
      title: "Fine-Tuning",
      icon: <Brain size={30} />,
      text: "Fine-tune MolT5 to generate target-aware drug-like molecules.",
    },
    {
      title: "De Novo Generation",
      icon: <Sparkles size={30} />,
      text: "Generate novel target-specific molecules using fine-tuned transformer models.",
    },
    {
      title: "QSAR",
      icon: <Activity size={30} />,
      text: "Predict biological activity and rank generated candidates.",
    },
    {
      title: "Optimization",
      icon: <Atom size={30} />,
      text: "Improve drug-likeness, similarity, and molecular properties.",
    },
    {
      title: "Docking",
      icon: <FlaskConical size={30} />,
      text: "Validate ligand binding using protein-ligand docking analysis.",
    },
    {
      title: "ADMET Analysis",
      icon: <ShieldCheck size={30} />,
      text: "Evaluate absorption, distribution, metabolism, excretion, and toxicity properties to prioritize safer drug candidates.",
    },
  ];
  const tools = [
    {
      name: "MolT5 Generator",
      desc: "A research-oriented module for molecular generation.",
    },
    {
      name: "QSAR Predictor",
      desc: "Predicts biological activity of generated compounds.",
    },
    {
      name: "Molecular Optimizer",
      desc: "Improves molecular properties and drug-likeness.",
    },
    {
      name: "Docking & ADMET",
      desc: "Molecular docking performed using external software and web-based ADMET evaluation tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-400" />
          <h1 className="text-2xl font-bold">MolNovoAI</h1>
        </div>

        <div className="hidden md:flex gap-6 text-slate-300 text-sm">
          <a href="#workflow" className="hover:text-cyan-400">Workflow</a>
          <a href="#tools" className="hover:text-cyan-400">Tools</a>
          <a href="#demo" className="hover:text-cyan-400">Demo</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center bg-gradient-to-b from-slate-950 to-slate-900">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 font-semibold mb-4"
        >
        
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 md:text-6xl font-bold max-w-5xl mx-auto leading-tight"
        >
          AI-Powered De Novo Drug Discovery Platform
        </motion.h2>

        <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg">
          Generate, evaluate, optimize, and validate novel drug candidates using generative AI, QSAR modeling, molecular docking, and ADMET prediction.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#demo"
            className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-bold hover:bg-cyan-300"
          >
            Try Demo
          </a>

          <a
            href="#workflow"
            className="border border-slate-600 px-7 py-3 rounded-full font-bold hover:border-cyan-400"
          >
            Explore Workflow
          </a>
        </div>
      </section>

      <section id="workflow" className="px-8 py-20 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-4">
          Discovery Workflow
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Our pipeline transforms molecular data into prioritized drug
          candidates through an integrated AI and computational biology process.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="w-64 bg-slate-800 border border-slate-700 rounded-2xl p-5"
            >
              <div className="text-cyan-400 mb-4">{step.icon}</div>
              <h3 className="font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-slate-300 text-sm">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="tools" className="px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
{tools.map((tool, index) => (
  <div
    key={index}
    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
  >
    <h3 className="text-cyan-400 font-bold text-xl mb-3">
      {tool.name}
    </h3>

    <p className="text-slate-300 text-sm">
      {tool.desc}
    </p>
  </div>
))}
        </div>
      </section>

      <section id="demo" className="px-8 py-20 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-4">
          Interactive Prototype Demo
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
          Enter a molecular design prompt and preview a simulated AI discovery
          result.
        </p>

        <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-3xl p-8">
          <label className="text-slate-300 block mb-3">
            Molecular design prompt
          </label>

          <div className="flex flex-col md:flex-row gap-3">
           <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Generate natural-product-like COX-2 inhibitors"
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
           />

           <input
             type="number"
             min="1"
             max="20"
             value={numMolecules}
             onChange={(e) => setNumMolecules(e.target.value)}
             className="w-32 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
           />

          <button
            onClick={runDemo}
            disabled={loading}
            className={`px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
             loading
              ? "bg-emerald-400 text-slate-950 scale-105 cursor-wait"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-105"
      }`}
   >
           <Send size={18} className={loading ? "animate-pulse" : ""} />
           {loading ? "Generating..." : "Generate"}
       </button>
       </div>

       {candidates.length > 0 && (
         <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
           Top Generated Candidates
          </h3>

    <div className="overflow-x-auto">
      <table className="w-full border border-slate-700 rounded-xl overflow-hidden">
        <thead className="bg-slate-950">
          <tr>
            <th className="p-4 text-left text-slate-300">Rank</th>
            <th className="p-4 text-left text-slate-300">Generated SMILES</th>
            <th className="p-4 text-left text-slate-300">Predicted pIC50</th>
            <th className="p-4 text-left text-slate-300">QSAR Status</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} className="border-t border-slate-700">
              <td className="p-4 text-cyan-400 font-bold">
                #{index + 1}
              </td>
              <td className="p-4 text-slate-200 break-all">
                {candidate.smiles}
              </td>
              <td className="p-4 text-emerald-400 font-bold">
                {candidate.predicted_pIC50.toFixed(3)}
              </td>
              <td className="p-4 text-slate-300">
                {candidate.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
        </div>
        </section>

      <section id="contact" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Built for Research Collaboration
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Designed for chemistry students, biology researchers, and AI-driven
          drug discovery teams.
        </p>

        <button className="bg-emerald-400 text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-300">
          Request Collaboration
        </button>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
        © 2026 MolNovoAI — AI-Driven Drug Discovery Prototype
      </footer>
    </div>
  );
}
