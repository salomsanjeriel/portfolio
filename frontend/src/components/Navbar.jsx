import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#080310]/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            {portfolioData.hero.name.charAt(0)}
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            {portfolioData.hero.name.split(' ').slice(-1)[0]}
          </span>
        </a>
        
        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-white border-b-2 border-primary-500 pb-1">Home</a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
          <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:block">
          <a href="/resume.pdf" target="_blank" className="btn-primary py-2 px-5 text-xs">
            DOWNLOAD CV <Download className="w-3 h-3 ml-2" />
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
