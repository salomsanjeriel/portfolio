import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';
import MagneticButton from '../components/motion/MagneticButton';

const AboutSection = () => {
  return (
    <ScrollReveal className="glass-card p-8 md:p-10 h-full flex flex-col group card-hover" id="about">
      <ScrollRevealItem className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-primary-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
          <User className="w-6 h-6 text-primary-500" />
        </div>
        <h3 className="text-2xl font-bold text-textMain tracking-tight">About Me</h3>
      </ScrollRevealItem>
      
      <ScrollRevealItem>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow font-medium text-base md:text-lg">
          I am an enthusiastic undergraduate student pursuing BSc. (Hons) in Information Technology at the University of Kelaniya. I have a strong foundation in programming and web technologies and enjoy learning new IT skills.
        </p>
      </ScrollRevealItem>
      
      <ScrollRevealItem>
        <p className="text-gray-600 leading-relaxed mb-10 flex-grow font-medium text-base md:text-lg">
          I am looking for an IT internship to gain real working experience and develop my career in the IT industry.
        </p>
      </ScrollRevealItem>
      
      <ScrollRevealItem className="mt-auto">
        <MagneticButton href="#projects" className="btn-secondary w-max group/btn">
          More About Me <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </MagneticButton>
      </ScrollRevealItem>
    </ScrollReveal>
  );
};

export default AboutSection;
