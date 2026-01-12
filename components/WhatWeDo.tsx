import React from 'react';
import { ShieldCheck, Target } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-dot opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-iceBlue uppercase tracking-[0.3em] mb-4">What BCB Does?</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">
              Supporting platforms using a <br />
              <span className="text-gray-500">straightforward, practical process.</span>
            </h3>
          </div>
          <div className="text-gray-500 max-w-xs text-sm leading-relaxed mb-2 font-light">
            Designed for learning, product refinement, and responsible visibility—without hype, metrics, or performance promises.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Card 1: Testing */}
          <div className="relative p-1 bg-gradient-to-br from-iceBlue/20 to-transparent">
            <div className="bg-black p-10 lg:p-16 h-full flex flex-col">
              <div className="flex items-start justify-between mb-12">
                <div className="w-16 h-16 rounded-sm border border-iceBlue/20 flex items-center justify-center text-iceBlue">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-gray-700 font-bold tracking-widest block mb-1">PILLAR 01</span>
                  <span className="text-iceBlue text-sm font-bold uppercase tracking-tighter">Testing</span>
                </div>
              </div>
              <h4 className="text-3xl font-display font-bold mb-6">Community Testing & Feedback</h4>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                BCB members help early-stage platforms by testing features in real use, not just in theory. The goal is to catch friction early—unclear steps, missing details, confusing flows—then share structured feedback that teams can actually work with. It’s collaborative and practical: we test, we document what we’re seeing, and we help platforms refine things before a wider release.
              </p>
              <div className="border-t border-white/5 pt-8 grid grid-cols-2 gap-4">
                <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">Identify friction</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">Structured data</div>
              </div>
            </div>
          </div>

          {/* Service Card 2: Promotion */}
          <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent">
            <div className="bg-black p-10 lg:p-16 h-full flex flex-col">
              <div className="flex items-start justify-between mb-12">
                <div className="w-16 h-16 rounded-sm border border-white/10 flex items-center justify-center text-white">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-gray-700 font-bold tracking-widest block mb-1">PILLAR 02</span>
                  <span className="text-gray-300 text-sm font-bold uppercase tracking-tighter">Promotion</span>
                </div>
              </div>
              <h4 className="text-3xl font-display font-bold mb-6">Community Participation & Visibility</h4>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                BCB supports visibility in a straightforward, community-led way. When a platform engages with BCB, it can be introduced through conversations, participation, and organic community discussion—so people discover it while they’re already exploring relevant topics. It’s not a campaign, and it’s not forced; it’s simply real users engaging, sharing context, and helping the right audiences notice what’s being built.
              </p>
              <div className="border-t border-white/5 pt-8 grid grid-cols-2 gap-4">
                <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">Organic discovery</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-widest">Contextual presence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;