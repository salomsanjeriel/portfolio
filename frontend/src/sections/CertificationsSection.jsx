import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from '../components/motion/TiltCard';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const CertificationsSection = () => {
  const certifications = portfolioData.certifications;
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedCert?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCert.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedCert?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length);
    }
  };

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
                <div 
                  className="block w-full h-full relative rounded-[2rem] overflow-hidden group/bento border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900 cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  
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
                    
                    {/* Date */}
                    <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-2xl drop-shadow-md font-medium">
                      {cert.date}
                    </p>
                    
                    {/* View Details Hint */}
                    <div className="mt-4 transform translate-y-8 group-hover/bento:translate-y-0 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 delay-75">
                      <span className="inline-flex items-center text-primary-400 text-sm font-bold">
                        View Details <ExternalLink className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </TiltCard>
          </ScrollRevealItem>
        ))}
      </div>

      {/* Certificate Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-3/5 bg-gray-100 dark:bg-black relative min-h-[300px] flex items-center justify-center p-6">
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-md" />
                ) : selectedCert.images && selectedCert.images.length > 0 ? (
                  <>
                    <img src={selectedCert.images[currentImageIndex]} alt={`${selectedCert.title} page ${currentImageIndex + 1}`} className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-md" />
                    
                    {/* Image Navigation */}
                    {selectedCert.images.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary-500 text-white rounded-full transition-colors backdrop-blur-md">
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary-500 text-white rounded-full transition-colors backdrop-blur-md">
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                          {selectedCert.images.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-primary-500' : 'bg-white/50'}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Award className="w-16 h-16 mb-4 opacity-20" />
                    <p>No image available</p>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col">
                <div className="inline-block px-4 py-1.5 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 self-start border border-primary-100 dark:border-primary-500/20">
                  {selectedCert.date}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-textMain dark:text-white mb-2 leading-tight">
                  {selectedCert.title}
                </h3>
                
                <p className="text-primary-500 font-bold mb-6">
                  {selectedCert.issuer}
                </p>
                
                <div className="w-12 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mb-6"></div>
                
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {selectedCert.description ? (
                    <p>{selectedCert.description}</p>
                  ) : (
                    <p className="italic opacity-70">Details available upon request.</p>
                  )}
                </div>
                
                {selectedCert.url && (
                  <div className="mt-auto pt-8">
                    <a href={selectedCert.url} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
                      Verify Credential <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollReveal>
  );
};

export default CertificationsSection;
