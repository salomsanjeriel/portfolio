import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <ScrollReveal className="glass-card card-hover p-8 md:p-10 h-full flex flex-col" id="education">
      <ScrollRevealItem className="flex items-center space-x-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-primary-200 flex items-center justify-center shadow-sm">
          <GraduationCap className="w-6 h-6 text-primary-500" />
        </div>
        <h3 className="text-2xl font-bold text-textMain tracking-tight">Education</h3>
      </ScrollRevealItem>
      
      <div className="flex flex-col space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {education.map((edu, index) => (
          <ScrollRevealItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary-500 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-textMain text-sm">{edu.degree}</h4>
              </div>
              <div className="text-xs font-semibold text-primary-600 mb-2">{edu.institution}</div>
              <div className="text-[10px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-max border border-gray-200">
                {edu.dates}
              </div>
            </div>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default EducationSection;
