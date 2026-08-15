import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download } from 'lucide-react';
import MagneticButton from './motion/MagneticButton';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-500 rounded flex items-center justify-center font-bold text-white text-lg shadow-sm">
            {portfolioData.hero.name.charAt(0)}
          </div>
          <span className="text-xl font-bold text-textMain tracking-tight">
            {portfolioData.hero.name.split(' ').slice(-1)[0]}
          </span>
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider">
          <Link to="/" className={`pb-1 border-b-2 transition-colors ${location.pathname === '/' ? 'text-textMain border-primary-500' : 'text-gray-400 border-transparent hover:text-textMain'}`}>Home</Link>
          <a href="/#about" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain transition-colors">About</a>
          <a href="/#tools" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain transition-colors">Tools</a>
          <Link to="/projects" className={`pb-1 border-b-2 transition-colors ${location.pathname === '/projects' ? 'text-textMain border-primary-500' : 'text-gray-400 border-transparent hover:text-textMain'}`}>Projects</Link>
          <a href="/#education" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain transition-colors">Education</a>
          <a href="/#certifications" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain transition-colors">Certifications</a>
          <a href="/#contact" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:block">
          <MagneticButton href="/resume.pdf" className="btn-primary py-3 px-6 text-[10px] tracking-widest shadow-md">
            DOWNLOAD CV <Download className="w-3 h-3 ml-2" />
          </MagneticButton>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
