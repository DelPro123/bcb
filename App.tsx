
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Experience from './components/Experience';
import Transparency from './components/Transparency';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-iceBlue selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Experience />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
};

export default App;
