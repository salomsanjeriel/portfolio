import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';
import TiltCard from '../components/motion/TiltCard';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const CertificationsSection = () => {
  const certifications = portfolioData.certifications;

  return (
    <ScrollReveal className="bg-transparent dark:bg-[#111111] border border-gray-100 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-[2rem] p-6 md:p-10 transition-colors duration-700" id="certifications">
      <ScrollRevealItem>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-primary-200 dark:border-primary-500/30 flex items-center justify-center shadow-sm transition-colors">
              <Award className="w-6 h-6 text-primary-500 dark:text-orange-400" />
            </div>
            <h3 className="text-3xl font-extrabold text-textMain dark:text-white tracking-tight transition-colors">Certifications</h3>
          </div>
        </div>
      </ScrollRevealItem>

      {/* Premium Uniform Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certifications.map((cert, idx) => (
          <ScrollRevealItem key={idx}>
            <TiltCard className="w-full h-[450px]">
              {({ isHovered }) => (
                <div className="block w-full h-full relative rounded-[2rem] overflow-hidden group/bento border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900">
                  
                  {/* Background Image (The UI) */}
                  <div className="absolute inset-0 w-full h-full bg-white dark:bg-black/20 flex items-center justify-center p-4">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className={`w-full h-full object-contain transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`} 
                      />
                    ) : cert.images && cert.images.length > 0 ? (
                      <img 
                        src={cert.images[0]} 
                        alt={cert.title} 
                        className={`w-full h-full object-contain transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`} 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">No Image</div>
                    )}
                  </div>

                  {/* Dramatic Dark Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-80'}`}></div>

                  {/* Colored Glow overlay on hover */}
                  <div className={`absolute inset-0 bg-primary-500/20 mix-blend-overlay transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                  {/* Content Container - Bottom Aligned */}
                  <div className="absolute inset-0 p-6 md:p-8 z-20 flex flex-col justify-end">
                    
                    {/* Floating Issuer Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover/bento:translate-y-0 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 ease-out">
                      <span className="text-[10px] md:text-xs uppercase font-extrabold text-white tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className={`text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight transition-colors duration-300 drop-shadow-lg ${isHovered ? 'text-primary-400' : ''} line-clamp-3`}>
                      {cert.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-2xl mb-6 drop-shadow-md font-medium">
                      {cert.year}
                    </p>

                    {/* CTA Button */}
                    {cert.url && (
                      <div className="transform translate-y-8 group-hover/bento:translate-y-0 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 delay-75">
                        <a href={cert.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                          View Credential <ExternalLink className="w-5 h-5 ml-2 group-hover/bento:-translate-y-1 group-hover/bento:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TiltCard>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default CertificationsSection;
