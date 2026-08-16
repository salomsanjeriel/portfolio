import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Moon, Sun } from 'lucide-react';
import MagneticButton from './motion/MagneticButton';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-sm' : 'bg-transparent border-transparent'} py-4`}>
      <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-500 rounded flex items-center justify-center font-bold text-white text-lg shadow-sm">
            {portfolioData.hero.name.charAt(0)}
          </div>
          <span className="text-xl font-bold text-textMain dark:text-white tracking-tight transition-colors">
            {portfolioData.hero.name.split(' ').slice(-1)[0]}
          </span>
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider">
          <Link to="/" className={`pb-1 border-b-2 transition-colors ${location.pathname === '/' ? 'text-textMain dark:text-white border-primary-500' : 'text-gray-400 border-transparent hover:text-textMain dark:hover:text-white'}`}>Home</Link>
          <a href="/#about" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain dark:hover:text-white transition-colors">About</a>
          <a href="/#tools" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain dark:hover:text-white transition-colors">Tools</a>
          <Link to="/projects" className={`pb-1 border-b-2 transition-colors ${location.pathname === '/projects' ? 'text-textMain dark:text-white border-primary-500' : 'text-gray-400 border-transparent hover:text-textMain dark:hover:text-white'}`}>Projects</Link>
          <a href="/#education" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain dark:hover:text-white transition-colors">Education</a>
          <a href="/#certifications" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain dark:hover:text-white transition-colors">Certifications</a>
          <a href="/#contact" className="pb-1 border-b-2 border-transparent text-gray-400 hover:text-textMain dark:hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => {
              console.log("Toggle button clicked");
              toggleTheme();
            }}
            className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 z-50 relative ${
              isDarkMode 
                ? 'bg-[#1a1a1a] border-gray-600 text-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.3)]' 
                : 'bg-gray-100 border-gray-200 text-slate-700 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'
            }`}
            aria-label="Toggle theme"
            style={{ cursor: 'pointer' }}
          >
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <MagneticButton 
            href={portfolioData.contact.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-5 text-[10px] tracking-widest shadow-md"
          >
            DOWNLOAD CV <Download className="w-3 h-3 ml-2" />
          </MagneticButton>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
