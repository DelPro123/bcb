import React from 'react';
import { Twitter, Linkedin, Send, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-iceBlue/5 blur-[150px] translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-iceBlue rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-xs text-black uppercase">B</div>
              </div>
              <span className="font-display text-2xl font-bold tracking-[0.2em] uppercase">
                BCB <span className="text-iceBlue">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-10 font-light leading-relaxed">
              Global independent consulting for Web3, AI, and emerging technology through community participation. Connecting builders with real users for structural refinement.
            </p>
            <div className="flex gap-6">
              {[Twitter, Send, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-600 hover:text-iceBlue hover:border-iceBlue transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/5 p-10 md:p-14 relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-iceBlue/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
              <h5 className="text-[10px] font-bold text-iceBlue uppercase tracking-[0.4em] mb-8">Positioning Clarifier</h5>
              <p className="text-lg text-gray-500 leading-relaxed italic font-light">
                "BCB is not a traditional marketing agency or a paid traffic provider. We focus on structured community participation that helps platforms gather real feedback early. Our work includes real-user testing, clear feedback cycles, and collaborative iteration support. Visibility is approached through genuine community engagement, not paid campaigns."
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} BCB Hub &bull; Independent Consulting Network
          </div>
          <div className="flex gap-12 text-[10px] font-bold text-gray-700 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-iceBlue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-iceBlue transition-colors">Terms of Work</a>
            <a href="#" className="hover:text-iceBlue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;