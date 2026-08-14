import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-hover p-8 md:p-10 h-full flex flex-col"
      id="education"
    >
      <div className="flex items-center space-x-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.15)]">
          <GraduationCap className="w-6 h-6 text-primary-400" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
      </div>
      
      <div className="flex flex-col space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {education.map((edu, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary-500 bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl bg-background border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
              </div>
              <div className="text-xs text-primary-400 mb-2">{edu.institution}</div>
              <div className="text-[10px] font-medium text-gray-500 bg-surfaceHover px-2 py-0.5 rounded-full w-max">
                {edu.dates}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
