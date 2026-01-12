import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-iceBlue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold text-iceBlue uppercase tracking-[0.3em] mb-8">Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tight">
              A community-first network <br />
              <span className="text-gray-500 italic">built on contribution.</span>
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              BCB is built around practical contribution, not promotion. We are not a marketing funnel. We are a structured environment where platforms can engage with real users early, and where members can participate in new product journeys with clarity and context.
            </p>
          </div>
          
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-sm">
            <h4 className="text-2xl font-display font-bold mb-6 text-white uppercase tracking-tight">Homepage Objective</h4>
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                BCB is a global community network that supports early-stage platforms through real user participation. We connect people, builders, and emerging products in one place—so new technologies can be tested, understood, and improved with community input.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed border-t border-white/5 pt-6">
                BCB exists to support new technologies, strengthen ecosystems, and help communities grow smarter through collaboration, structured testing, and long-term partnerships.
              </p>
              <div className="pt-4">
                <button className="text-iceBlue text-sm font-bold uppercase tracking-widest flex items-center gap-2 group">
                  Explore BCB
                  <div className="w-10 h-[1px] bg-iceBlue group-hover:w-16 transition-all"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;