import React from 'react';
import { Shield, Zap, DollarSign } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <section id="transparency" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-iceBlue uppercase tracking-[0.3em] mb-8">Business Model</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tight">
              How BCB <span className="text-iceBlue">Operates?</span>
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
              Many platforms spend significantly on marketing and user acquisition. BCB operates differently—as an independent consulting and community network focused on participation, testing, and structured collaboration.
            </p>
            <div className="flex items-center gap-4 text-gray-600 italic text-sm">
              <Shield size={16} className="text-iceBlue" />
              BCB's work is supported through two standard commercial paths.
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-10 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.03] transition-all">
              <div className="w-12 h-12 rounded-sm bg-iceBlue/10 flex items-center justify-center text-iceBlue mb-8 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Partnership Sponsorships</h4>
              <p className="text-gray-500 leading-relaxed font-light">
                Platforms support ongoing community programs and structured engagement. This allows for a deep, long-term integration between builders and the community.
              </p>
            </div>

            <div className="p-10 bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.03] transition-all">
              <div className="w-12 h-12 rounded-sm bg-iceBlue/10 flex items-center justify-center text-iceBlue mb-8 group-hover:scale-110 transition-transform">
                <DollarSign size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Commission Arrangements</h4>
              <p className="text-gray-500 leading-relaxed font-light">
                Compensation is tied to an agreed, defined form of collaboration. This model ensures that BCB's goals are fully aligned with the platform's practical milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;