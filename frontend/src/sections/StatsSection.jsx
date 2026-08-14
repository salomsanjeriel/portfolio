import React from 'react';
import { Rocket, Code, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { icon: <Rocket className="w-8 h-8 text-primary-500" />, value: "2+", label: "Projects Completed" },
    { icon: <Code className="w-8 h-8 text-primary-500" />, value: "4+", label: "Technologies" },
    { icon: <Award className="w-8 h-8 text-primary-500" />, value: "3+", label: "Certifications" },
    { icon: <Calendar className="w-8 h-8 text-primary-500" />, value: "2025", label: "Started Journey" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-hover p-8 md:p-10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/5">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center space-x-4 mb-2">
              <div className="opacity-80">{stat.icon}</div>
              <span className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</span>
            </div>
            <span className="text-sm text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
