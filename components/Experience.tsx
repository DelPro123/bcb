import React from 'react';
import { Layers, Cpu, Share2 } from 'lucide-react';

const Experience: React.FC = () => {
  const categories = [
    {
      title: "Exchanges",
      desc: "Centralized and decentralized exchanges—where community feedback helps surface usability gaps, unclear workflows, and product friction in real conditions.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Blockchain & Infrastructure",
      desc: "Including networks, tooling, and ecosystem components that benefit from early testing and contributor insight.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Emerging Tech & AI",
      desc: "AI tools, social platforms, and early-stage technology products—where community-driven learning and real-user engagement support clearer iteration and better product direction.",
      icon: <Share2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h2 className="text-sm font-bold text-iceBlue uppercase tracking-[0.3em] mb-8">Track Record</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Credibility & <br />
              <span className="text-iceBlue">Experience</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-10 font-light">
              BCB has supported more than 100 Web3 and technology platforms across exchanges, blockchain and infrastructure projects, and early-stage products. Our work centers on structured community participation testing, feedback, and ongoing collaboration delivered in a consistent, process-led way.
            </p>
            
            <div className="flex items-center gap-6 p-8 border border-white/5 bg-white/[0.01]">
              <div className="text-6xl font-display font-bold text-iceBlue">100+</div>
              <div className="text-xs text-gray-600 uppercase tracking-[0.2em] font-bold leading-relaxed">
                Platforms <br />
                supported <br />
                successfully
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 grid gap-1">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gray-700 font-bold mb-4">Core Focus Areas</div>
            {categories.map((cat, idx) => (
              <div key={idx} className="group flex gap-8 p-10 bg-black border border-white/5 hover:border-iceBlue/20 transition-all duration-500">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-iceBlue group-hover:border-iceBlue/30 transition-colors">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-3 uppercase tracking-tight group-hover:text-iceBlue transition-colors">{cat.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-light">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;