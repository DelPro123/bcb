import React from 'react';
import { ArrowRight } from 'lucide-react';
import Token3D from './Token3D';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-iceBlue/20 to-transparent animate-[scan_10s_ease-in-out_infinite]"></div>
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          <div className="flex-[1.3] pt-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-iceBlue/10 bg-iceBlue/5 text-[10px] font-bold uppercase tracking-[0.2em] text-iceBlue mb-10 animate-fade-in mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-iceBlue shadow-[0_0_10px_#90e4ff]"></span>
              Global Independent Consulting Team
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
              Working with <br />
              <span className="text-iceBlue">Technology Platforms</span> <br />
              <span className="text-white/60 text-4xl md:text-5xl lg:text-6xl">through structured participation</span>
            </h1>

            <div className="max-w-2xl mb-12 mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                We work with new platforms to test features in real conditions and surface what needs tightening before a wider release. We translate community input into clear, structured feedback that teams can use for iteration. We also support community-led visibility by introducing platforms through participation and organic discussion inside BCB.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <button className="group relative w-full sm:w-auto px-12 py-5 bg-iceBlue text-black font-bold rounded-sm flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(144,228,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore How We Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Audience clarification</span>
                <span className="text-xs text-gray-500 max-w-[240px]">
                  For Web3, blockchain, AI, and emerging technology teams preparing for broader release.
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end items-center relative py-12 lg:py-0 scale-90 lg:scale-110">
             <Token3D />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};

export default Hero;