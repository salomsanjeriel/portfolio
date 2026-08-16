import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <ScrollReveal className="glass-card card-hover p-8 md:p-10 h-full flex flex-col bg-transparent dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-colors duration-700" id="education">
      <ScrollRevealItem className="flex items-center space-x-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-primary-200 dark:border-primary-500/30 flex items-center justify-center shadow-sm transition-colors">
          <GraduationCap className="w-6 h-6 text-primary-500 dark:text-orange-400" />
        </div>
        <h3 className="text-2xl font-bold text-textMain dark:text-white tracking-tight transition-colors">Education</h3>
      </ScrollRevealItem>
      
      <div className="flex flex-col space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
        {education.map((edu, index) => (
          <ScrollRevealItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary-500 dark:border-orange-500 bg-white dark:bg-[#111111] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
              <div className="w-2 h-2 bg-primary-500 dark:bg-orange-500 rounded-full transition-colors"></div>
            </div>
            
            {/* Content card */}
            <div className={`w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] relative p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm group-hover:border-primary-300 dark:group-hover:border-primary-500/50 group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] dark:group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] transition-all duration-300 flex flex-col items-start text-left ${edu.url ? 'hover:-translate-y-1 hover:shadow-md' : ''}`}>
              
              {/* Clickable Overlay */}
              {edu.url && (
                <a href={edu.url} target="_blank" rel="noreferrer" className="absolute inset-0 z-20 cursor-pointer" aria-label={`Visit ${edu.institution}`}></a>
              )}

              {/* Optional Logo */}
              {edu.logo && (
                <div className="w-12 h-12 mb-3 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 bg-white">
                  <img src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-contain p-1" />
                </div>
              )}

              <div className="flex items-center justify-between mb-1 w-full">
                <h4 className="font-bold text-textMain dark:text-white text-sm transition-colors">{edu.degree}</h4>
              </div>
              <div className="text-xs font-semibold text-primary-600 dark:text-orange-400 mb-2 transition-colors">{edu.institution}</div>
              <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full w-max border border-gray-200 dark:border-white/10 transition-colors mb-3">
                {edu.dates}
              </div>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="mt-2 space-y-1.5 w-full">
                  {edu.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="mr-2 text-primary-500 mt-0.5">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default EducationSection;
