import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileCode, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = portfolioData.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    if (location.state?.selectedProject) {
      const idx = projects.findIndex(p => p.title === location.state.selectedProject);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [location.state, projects]);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 45 : -45,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 45 : -45,
      };
    }
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (projects.length === 0) return <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-primary-500 font-bold tracking-widest uppercase">Loading Projects...</div>;

  const project = projects[currentIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-textMain dark:text-white pt-24 pb-12 px-4 md:px-12 flex flex-col items-center justify-center relative overflow-hidden perspective-[2000px] transition-colors duration-700">

      {/* Ambient background for this page specifically */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50 dark:from-primary-900/10 via-white dark:via-[#0a0a0a] to-white dark:to-[#0a0a0a] transition-colors duration-700"></div>

      {/* Back to Home Link */}
      <Link to="/" className="absolute top-[90px] left-4 md:left-12 z-50 flex items-center text-gray-500 hover:text-textMain dark:hover:text-white transition-colors group">
        <div className="w-10 h-10 rounded-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 flex items-center justify-center mr-3 group-hover:bg-orange-50 dark:group-hover:bg-primary-900/30 group-hover:border-primary-200 transition-all shadow-sm">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="font-bold tracking-widest text-sm uppercase">Back to Home</span>
      </Link>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-50">
        <button onClick={() => paginate(-1)} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-textMain dark:text-white hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all hover:scale-110 shadow-lg">
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-50">
        <button onClick={() => paginate(1)} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-textMain dark:text-white hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all hover:scale-110 shadow-lg">
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-4">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary-500 scale-125' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'}`}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.4 },
            rotateY: { type: "spring", stiffness: 150, damping: 25 },
            scale: { duration: 0.4 }
          }}
          className="w-full max-w-[90vw] md:max-w-7xl h-[75vh] md:h-[85vh] bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden ring-1 ring-gray-100 dark:ring-white/5 transition-colors"
        >
          {/* Top Info Bar */}
          <div className="p-6 md:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-gradient-to-r from-gray-50 dark:from-[#1a1a1a] to-white dark:to-[#111111] border-b border-gray-200 dark:border-white/10 z-20">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] md:text-xs uppercase font-extrabold text-primary-600 dark:text-orange-300 tracking-wider bg-orange-100 dark:bg-orange-500/20 px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-textMain dark:text-white tracking-tight">{project.title}</h2>
            </div>
            <div className="flex space-x-3 md:space-x-4 shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/50 text-textMain dark:text-white hover:text-primary-600 dark:hover:text-primary-400 rounded-xl text-sm font-bold transition-all shadow-sm">
                  <FileCode className="w-4 h-4 mr-2" /> Code
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Inner Image Area */}
          <div className="flex-grow relative bg-[#F8F9FA] dark:bg-black/40 flex items-center justify-center overflow-hidden group/innercarousel">
            {project.images && project.images.length > 0 ? (
              <>
                <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pointer-events-auto">
                  {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-contain shrink-0 snap-center px-4 py-8 drop-shadow-xl" />
                  ))}
                </div>
                {/* Embedded inner dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
                  {project.images.map((_, idx) => (
                    <div key={idx} className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                  ))}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md text-textMain dark:text-white text-xs px-4 py-2 rounded-full z-20 font-bold border border-gray-200 dark:border-white/10 opacity-0 group-hover/innercarousel:opacity-100 transition-opacity pointer-events-none flex items-center shadow-md">
                  Scroll horizontally to see more images →
                </div>
              </>
            ) : project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-contain p-8 drop-shadow-xl" />
            ) : project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain p-8 drop-shadow-xl" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-white/5">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">No Image</span>
              </div>
            )}

            {/* Description overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pt-32 bg-gradient-to-t from-white dark:from-[#111111] via-white/95 dark:via-[#111111]/95 to-transparent pointer-events-none flex items-end">
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-4xl leading-relaxed font-medium">{project.description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
