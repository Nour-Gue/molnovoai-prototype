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
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 w-full max-w-md">
  
          <h1 className="text-4xl font-bold text-center mb-3 text-cyan-400">
            MolNovoAI
          </h1>
  
          <p className="text-slate-400 text-center mb-8">
            AI-Powered De Novo Drug Discovery Platform
          </p>
  
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700"
          />
  
          <button
            onClick={() => setLoggedIn(true)}
            className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:scale-105 transition"
          >
            Access Platform
          </button>
  
          <p className="text-center text-slate-500 text-sm mt-5">
            Prototype Access Portal
          </p>
  
        </div>
      </div>
    );
  }
  const runDemo = async () => {
    setLoading(true);
  
    await new Promise((resolve) => setTimeout(resolve, 1500));
  
    setCandidates([
      {
        smiles: "CC(=O)Oc1ccccc1C(=O)O",
        predicted_pIC50: 8.42,
        status: "Predicted Active",
      },
      {
        smiles: "COc1ccc2nc(S(N)(=O)=O)sc2c1",
        predicted_pIC50: 8.11,
        status: "Predicted Active",
      },
      {
        smiles: "CCN(CC)CCOc1ccc2nc(N)sc2c1",
        predicted_pIC50: 7.95,
        status: "Predicted Active",
      },
      {
        smiles: "Oc1ccc(-c2cc(O)cc(O)c2O)cc1",
        predicted_pIC50: 7.54,
        status: "Moderate Activity",
      },
      {
        smiles: "COc1ccccc1C(=O)Nc1nccs1",
        predicted_pIC50: 7.21,
        status: "Moderate Activity",
      },
    ]);
  
    setLoading(false);
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
    {
      title: "Dynamics",
      icon: <Activity size={32} />,
      text: "Assess protein–ligand complex stability through Molecular Dynamics simulations.",
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
      name: "Molecular Docking, ADMET & Dynamics",
      desc: "Combines protein–ligand docking, ADMET prediction, and molecular dynamics simulations to evaluate binding affinity, pharmacokinetics, toxicity, and complex stability over time.",
    }
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
          <a href="#plans" className="hover:text-cyan-400">Plans</a>
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
<section id="plans" className="px-8 py-20 bg-slate-950">

  <h2 className="text-3xl font-bold text-center mb-4">
    Flexible Access Plans
  </h2>

  <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
    Designed for students, researchers, and biotech teams exploring AI-driven drug discovery.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {/* FREE PLAN */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:scale-105 transition">

      <div className="text-center mb-4">
        <span className="text-sm text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full">
          Free Plan
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-center">
        Student Plan
      </h3>

      <p className="text-slate-400 mb-4 text-center">
        Learning & Academic Exploration
      </p>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-emerald-400">
          0 DA / $0
        </div>
        <p className="text-slate-500 text-sm">
          Completely Free
        </p>
      </div>

      <ul className="space-y-3 text-slate-300 mb-8 text-sm">
        <li>• Prototype Molecule Generation</li>
        <li>• Educational Workflow Access</li>
        <li>• Limited QSAR Predictions</li>
        <li>• Demo Candidate Ranking</li>
      </ul>

      <button className="w-full py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold">
        Start Free
      </button>
    </div>

    {/* RESEARCHER PLAN */}
    <div className="bg-cyan-400 text-slate-950 border border-cyan-300 rounded-3xl p-8 scale-105 shadow-xl">

      <div className="text-center mb-4">
        <span className="bg-slate-950 text-cyan-400 px-3 py-1 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-center">
        Researcher Plan
      </h3>

      <p className="text-slate-800 mb-4 text-center">
        Universities & Academic Labs
      </p>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold">
          15,000 DA
        </div>
        <p className="text-slate-800 text-sm">
          / month (≈ $49)
        </p>
      </div>

      <ul className="space-y-3 mb-8 text-sm">
        <li>• Multiple Candidate Generation</li>
        <li>• QSAR Ranking (pIC50)</li>
        <li>• Exportable Molecular Results</li>
        <li>• ADMET Module Preview</li>
        <li>• Research Collaboration Support</li>
      </ul>

      <button className="w-full py-3 rounded-xl bg-slate-950 text-cyan-400 font-bold">
        Request Access
      </button>
    </div>

    {/* ENTERPRISE PLAN */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:scale-105 transition">

      <div className="text-center mb-4">
        <span className="text-sm text-purple-400 font-bold bg-purple-400/10 px-3 py-1 rounded-full">
          Enterprise
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-center">
        Lab / Enterprise
      </h3>

      <p className="text-slate-400 mb-4 text-center">
        Biotech & Pharma Teams
      </p>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-purple-400">
          Custom
        </div>
        <p className="text-slate-500 text-sm">
          From 40,000 DA / $199+
        </p>
      </div>

      <ul className="space-y-3 text-slate-300 mb-8 text-sm">
        <li>• Large-Scale Virtual Screening</li>
        <li>• Advanced Optimization Workflows</li>
        <li>• Docking Integration</li>
        <li>• Custom Target Projects</li>
        <li>• Priority Technical Support</li>
      </ul>

      <button className="w-full py-3 rounded-xl bg-white text-slate-950 font-bold">
        Contact Sales
      </button>
    </div>

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
            placeholder="COX2; heavy_atoms: 30; heteroatoms: 4; rings: 1; aromatic_rings: 1; MW: 400.55; logP: 5.20; TPSA: 60.30; HBD: 2; HBA: 3; RB: 12; fraction_Csp3: 0.55; formal_charge: 0; Lipinski_violations: 1ِ"
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
           />

           <input
             type="number"
             min="1"
             max="50"
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
