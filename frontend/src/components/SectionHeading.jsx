import React from 'react';
import { ScrollRevealItem } from './motion/ScrollReveal';

const SectionHeading = ({ title, subtitle, label }) => {
  return (
    <div className="mb-16 text-center">
      {label && (
        <ScrollRevealItem className="mb-4">
          <span className="text-xs font-bold text-primary-400 tracking-[0.2em] uppercase bg-primary-900/20 px-3 py-1.5 rounded-full border border-primary-500/20">
            // {label}
          </span>
        </ScrollRevealItem>
      )}
      <ScrollRevealItem>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {title}
        </h2>
      </ScrollRevealItem>
      {subtitle && (
        <ScrollRevealItem>
          <p className="text-primary-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </ScrollRevealItem>
      )}
    </div>
  );
};

export default SectionHeading;
