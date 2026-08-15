import React from 'react';
import { Rocket, Code, Award, Calendar } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const StatsSection = () => {
  const stats = [
    { icon: <Rocket className="w-8 h-8 text-primary-500" />, value: "2+", label: "Projects Completed" },
    { icon: <Code className="w-8 h-8 text-primary-500" />, value: "4+", label: "Technologies" },
    { icon: <Award className="w-8 h-8 text-primary-500" />, value: "3+", label: "Certifications" },
    { icon: <Calendar className="w-8 h-8 text-primary-500" />, value: "2025", label: "Started Journey" },
  ];

  return (
    <ScrollReveal className="py-4 md:py-8 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-200">
        {stats.map((stat, idx) => (
          <ScrollRevealItem key={idx} className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center space-x-4 mb-2">
              <div className="opacity-100">{stat.icon}</div>
              <span className="text-3xl lg:text-4xl font-bold text-textMain">{stat.value}</span>
            </div>
            <span className="text-sm font-bold text-gray-500">{stat.label}</span>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default StatsSection;
