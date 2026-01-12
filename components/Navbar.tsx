
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Methodology', href: '#services' },
    { name: 'Track Record', href: '#experience' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 bg-iceBlue rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center font-display font-black text-[10px] text-black uppercase">B</div>
          </div>
          <span className="font-display text-lg font-bold tracking-[0.2em] uppercase">
            BCB <span className="text-iceBlue">Hub</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-iceBlue transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#explore" 
            className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-iceBlue transition-all duration-300"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 p-6 animate-in fade-in duration-500">
          <button className="absolute top-8 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-display font-bold text-gray-500 hover:text-iceBlue tracking-tighter"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#explore" 
            className="w-full text-center py-5 bg-iceBlue text-black font-black uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Connect With Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
