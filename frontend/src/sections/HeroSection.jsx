import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileCode, Briefcase } from 'lucide-react';

const HeroSection = () => {
  const { name, title, summary, photoUrl } = portfolioData.hero;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      {/* Left side: Intro text */}
      <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
        <div className="mb-6">
          <span className="tech-pill flex w-max items-center">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse mr-2 shadow-[0_0_8px_#8b5cf6]"></span>
            {title}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          Hello, I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">{name.split(' ').slice(0, 2).join(' ')}</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 text-glow-intense">{name.split(' ').slice(-1)[0]}</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light">
          {summary.substring(0, 150)}...
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a href="#projects" className="btn-primary group">
            Explore My Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me <Mail className="ml-2 w-4 h-4" />
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mr-2">Find me on</span>
          <a href={portfolioData.contact.github} className="w-10 h-10 rounded-full bg-[#160c28] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
            <FileCode className="w-4 h-4" />
          </a>
          <a href={portfolioData.contact.linkedin} className="w-10 h-10 rounded-full bg-[#160c28] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
            <Briefcase className="w-4 h-4" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="w-10 h-10 rounded-full bg-[#160c28] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Right side: Image */}
      <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center relative h-[500px]">
        {/* Orbital Rings */}
        <div className="orbit-ring w-[350px] h-[350px] md:w-[450px] md:h-[450px] opacity-40"></div>
        <div className="orbit-ring w-[280px] h-[280px] md:w-[350px] md:h-[350px] border-primary-400/30 opacity-60"></div>
        
        <div className="relative w-full max-w-[320px] aspect-[4/5] z-10">
          <img 
            src={photoUrl} 
            alt={name} 
            className="w-full h-full object-cover object-top rounded-[2rem] shadow-[0_20px_50px_rgba(124,58,237,0.2)] border border-white/10" 
            style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
          />
          
          <div className="absolute -bottom-4 -left-4 md:-left-12 card p-4 !bg-[#160c28]/95 z-20">
            <div className="text-[10px] text-gray-400 mb-1 font-bold uppercase tracking-widest">Open to</div>
            <div className="text-sm font-bold text-primary-300 mb-2">Internship Opportunities</div>
            <div className="flex items-center text-[10px] font-semibold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] mr-2"></span>
              Available for Opportunities
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
