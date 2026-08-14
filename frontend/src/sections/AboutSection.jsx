import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="card p-8 md:p-10 h-full flex flex-col group card-hover"
      id="about"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.15)] group-hover:scale-110 transition-transform duration-500">
          <User className="w-6 h-6 text-primary-400" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">About Me</h3>
      </div>
      
      <p className="text-gray-400 leading-relaxed mb-6 flex-grow font-light text-base md:text-lg">
        I am an enthusiastic undergraduate student pursuing BSc. (Hons) in Information Technology at the University of Kelaniya. I have a strong foundation in programming and web technologies and enjoy learning new IT skills.
      </p>
      
      <p className="text-gray-400 leading-relaxed mb-10 flex-grow font-light text-base md:text-lg">
        I am looking for an IT internship to gain real working experience and develop my career in the IT industry.
      </p>
      
      <a href="#projects" className="btn-secondary w-max group/btn mt-auto">
        More About Me <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

export default AboutSection;
