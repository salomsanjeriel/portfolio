import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { LayoutGrid, Server, Database, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const { programming, databases, web, cloud } = portfolioData.skills;
  
  const skillCategories = [
    { title: "Languages", skills: programming, icon: <Server className="w-5 h-5 text-primary-400" /> },
    { title: "Databases", skills: databases, icon: <Database className="w-5 h-5 text-primary-400" /> },
    { title: "Web Development", skills: web, icon: <LayoutGrid className="w-5 h-5 text-primary-400" /> },
    { title: "Cloud", skills: cloud, icon: <Cloud className="w-5 h-5 text-primary-400" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="card p-8 md:p-10 h-full flex flex-col card-hover group"
      id="skills"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.15)] group-hover:scale-110 transition-transform duration-500">
            <LayoutGrid className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">My Skills</h3>
        </div>
        <a href="#" className="btn-secondary px-4 py-2 text-xs">
          View All
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 flex-grow">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-[#1a0e30] rounded-lg border border-primary-500/10">
                {category.icon}
              </div>
              <h4 className="text-sm font-bold text-white tracking-wide">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="tech-pill hover:bg-primary-900/40 hover:border-primary-500/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
