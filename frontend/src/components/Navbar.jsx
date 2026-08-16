import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';
import MagneticButton from './motion/MagneticButton';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || mobileMenuOpen ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-sm' : 'bg-transparent border-transparent'} py-4`}>
      <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 z-50" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded flex items-center justify-center shadow-sm overflow-hidden">
            <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold text-textMain dark:text-white tracking-tight transition-colors">
            {portfolioData.hero.name.split(' ').slice(-1)[0]}
          </span>
        </Link>
        
        {/* Desktop Links */}
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
            onClick={() => toggleTheme()}
            className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-95 z-50 relative ${
              isDarkMode 
                ? 'bg-[#1a1a1a] border-gray-600 text-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.3)]' 
                : 'bg-gray-100 border-gray-200 text-slate-700 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'
            }`}
            aria-label="Toggle theme"
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

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center space-x-4 z-50">
          <button
            type="button"
            onClick={() => toggleTheme()}
            className={`flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-md border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#1a1a1a] border-gray-600 text-yellow-300' 
                : 'bg-gray-100 border-gray-200 text-slate-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-textMain dark:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
          >
            <div className="flex flex-col px-4 pt-4 pb-8 space-y-4 text-sm font-bold uppercase tracking-wider">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`py-2 border-b border-gray-100 dark:border-white/5 ${location.pathname === '/' ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}`}>Home</Link>
              <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400">About</a>
              <a href="/#tools" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400">Tools</a>
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className={`py-2 border-b border-gray-100 dark:border-white/5 ${location.pathname === '/projects' ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}`}>Projects</Link>
              <a href="/#education" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400">Education</a>
              <a href="/#certifications" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400">Certifications</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400">Contact</a>
              
              <div className="pt-4">
                <a
                  href={portfolioData.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl transition-colors shadow-md"
                >
                  DOWNLOAD CV <Download className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
