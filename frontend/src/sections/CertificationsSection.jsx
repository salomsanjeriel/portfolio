import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Star, Calendar, ExternalLink } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Swiper modules
import { EffectCards, Pagination, Navigation } from 'swiper/modules';

const CertificationsSection = () => {
  const certifications = portfolioData.certifications;

  return (
    <ScrollReveal className="glass-card card-hover p-8 md:p-10 h-full flex flex-col bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-colors duration-700" id="certifications">
      <ScrollRevealItem className="flex items-center justify-between mb-10 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-primary-200 dark:border-primary-500/30 flex items-center justify-center shadow-sm transition-colors">
            <Award className="w-6 h-6 text-primary-500 dark:text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-textMain dark:text-white tracking-tight transition-colors">Certifications</h3>
        </div>
      </ScrollRevealItem>
      
      {/* Vertical List of Certificates */}
      <div className="flex flex-col space-y-8 w-full mt-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col h-auto rounded-3xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl dark:shadow-[0_8px_30px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] transition-all duration-300 overflow-hidden group">
            
            {/* Certificate Image Area */}
            <div className="w-full aspect-video bg-gray-50 dark:bg-black/20 flex items-center justify-center border-b border-gray-200 dark:border-white/10 overflow-hidden relative p-4 group/innercarousel">
              {cert.images && cert.images.length > 0 ? (
                <>
                  <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pointer-events-auto">
                    {cert.images.map((img, i) => (
                      <img 
                        key={i} 
                        src={img} 
                        alt={`${cert.title} page ${i + 1}`} 
                        className="w-full h-full object-contain shrink-0 snap-center drop-shadow-md transition-transform duration-500"
                      />
                    ))}
                  </div>
                  {/* Embedded inner dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm opacity-0 group-hover/innercarousel:opacity-100 transition-opacity">
                    {cert.images.map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md text-textMain dark:text-white text-[10px] px-3 py-1 rounded-full z-20 font-bold border border-gray-200 dark:border-white/10 opacity-0 group-hover/innercarousel:opacity-100 transition-opacity pointer-events-none shadow-md">
                    Swipe to view more
                  </div>
                </>
              ) : cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <Award className="w-16 h-16 text-gray-300 dark:text-gray-600" />
              )}
              {/* Overlay for view credential */}
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                  <span className="px-6 py-3 bg-primary-500 text-white rounded-full font-bold flex items-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" /> View Credential
                  </span>
                </a>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-grow text-left bg-white dark:bg-[#111111]">
              <h4 className="text-xl font-bold text-textMain dark:text-white transition-colors mb-2 line-clamp-2">{cert.title}</h4>
              <p className="text-sm font-semibold text-primary-600 dark:text-orange-400 transition-colors mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex items-center justify-start border-t border-gray-100 dark:border-white/10 pt-4">
                <div className="flex items-center space-x-2">
                  {!cert.year?.includes('reading') && <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />}
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors">
                    {cert.year ? cert.year.replace(' (Currently reading)', '') : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default CertificationsSection;
