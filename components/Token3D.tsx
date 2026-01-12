
import React from 'react';

const Token3D: React.FC = () => {
  // Ultra high-end tech abstract render for the core
  const techCore = "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="relative w-96 h-96 flex items-center justify-center pointer-events-none">
      <style>{`
        .token-perspective {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
        .token-spin {
          animation: spin-complex 20s infinite linear;
          transform-style: preserve-3d;
        }
        .token-float {
          animation: float-calm 8s ease-in-out infinite;
        }
        @keyframes spin-complex {
          0% { transform: rotateY(0deg) rotateX(5deg); }
          100% { transform: rotateY(360deg) rotateX(5deg); }
        }
        @keyframes float-calm {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.02); }
        }
        .glass-edge {
          box-shadow: 
            inset 0 0 40px rgba(144, 228, 255, 0.2),
            0 0 40px rgba(144, 228, 255, 0.1);
        }
        .glint {
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.4) 55%, transparent 100%);
          animation: glint-move 6s infinite;
        }
        @keyframes glint-move {
          0% { transform: translateX(-150%) skewX(-30deg); }
          30%, 100% { transform: translateX(150%) skewX(-30deg); }
        }
      `}</style>

      {/* Background Volumetric Glow */}
      <div className="absolute w-[400px] h-[400px] bg-iceBlue/5 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="token-perspective w-full h-full flex items-center justify-center">
        <div className="token-float w-80 h-80 relative flex items-center justify-center">
          
          {/* Outer Glass Ring */}
          <div className="absolute inset-0 rounded-full border border-iceBlue/20 glass-edge animate-[spin_30s_linear_infinite] opacity-30"></div>
          
          {/* Main Rotating Token */}
          <div className="token-spin w-64 h-64 relative">
            
            {/* Front Face - Holographic Glass */}
            <div className="absolute inset-0 backface-hidden rounded-full bg-black/40 backdrop-blur-md border border-iceBlue/40 overflow-hidden shadow-[inset_0_0_50px_rgba(144,228,255,0.1)]">
              <img 
                src={techCore} 
                alt="Tech Core" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen brightness-150 grayscale contrast-125"
              />
              <div className="absolute inset-0 glint"></div>
              
              {/* Central Logo - Architectural Style */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-iceBlue/30 bg-black/60 flex items-center justify-center shadow-[0_0_30px_rgba(144,228,255,0.4)]">
                   <span className="text-5xl font-display font-bold text-iceBlue tracking-tighter">B</span>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 rounded-full bg-black/60 border border-iceBlue/20 flex items-center justify-center" style={{ transform: 'rotateY(180deg)' }}>
               <div className="w-16 h-16 rounded-full border border-iceBlue/10 flex items-center justify-center opacity-40">
                   <span className="text-3xl font-display font-bold text-iceBlue">B</span>
               </div>
            </div>

            {/* Thickness (Multiple layers of rings) */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute inset-0 rounded-full border border-iceBlue/5"
                style={{ transform: `translateZ(${i - 3}px)` }}
              />
            ))}
          </div>

          {/* Particle Orbitals */}
          <div className="absolute inset-[-40px] border border-dashed border-iceBlue/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
      </div>

      {/* Shadow Casting */}
      <div className="absolute bottom-0 w-64 h-12 bg-iceBlue/10 blur-2xl rounded-full scale-x-150 opacity-40"></div>
    </div>
  );
};

export default Token3D;
