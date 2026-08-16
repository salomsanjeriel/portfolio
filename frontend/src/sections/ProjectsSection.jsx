import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = portfolioData.projects;

  return (
    <ScrollReveal className="glass-card card-hover p-8 md:p-10 h-full flex flex-col bg-transparent dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-colors duration-700" id="projects">
      <ScrollRevealItem className="flex items-center justify-between mb-12 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-primary-200 dark:border-primary-500/30 flex items-center justify-center shadow-sm transition-colors">
            <Briefcase className="w-6 h-6 text-primary-500 dark:text-orange-400" />
          </div>
          <h3 className="text-3xl font-extrabold text-textMain dark:text-white tracking-tight transition-colors">Featured Projects</h3>
        </div>
      </ScrollRevealItem>
      
      {/* Timeline Container */}
      <div className="flex flex-col space-y-12 relative mt-4">
        {projects.map((project, index) => (
          <ScrollRevealItem key={index} className="relative flex items-center justify-between md:justify-center group is-active w-full">
            
            {/* Desktop Timeline dot (Perfectly centered) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-6 h-6 rounded-full border-4 border-primary-500 dark:border-orange-500 bg-white dark:bg-[#111111] shadow-lg z-20 transition-colors">
            </div>
            
            {/* Mobile Timeline dot */}
            <div className="flex md:hidden absolute left-2 -translate-x-1/2 items-center justify-center w-5 h-5 rounded-full border-2 border-primary-500 dark:border-orange-500 bg-white dark:bg-[#111111] shadow shrink-0 z-20 transition-colors">
              <div className="w-2 h-2 bg-primary-500 dark:bg-orange-500 rounded-full transition-colors"></div>
            </div>
            
            {/* Project Content card */}
            <div className={`w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} relative rounded-[2rem] bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl dark:shadow-[0_8px_30px_rgba(249,115,22,0.2)] dark:group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] transition-all duration-500 overflow-hidden flex flex-col group/card hover:-translate-y-2 min-h-[420px] md:min-h-0 md:h-[450px]`}>
              
              {/* Background Image Area (Full Bleed) */}
              <div className="absolute inset-0 w-full h-full bg-black group/innercarousel">
                {project.images && project.images.length > 0 ? (
                  <>
                    <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pointer-events-auto">
                      {project.images.map((img, i) => (
                        <img 
                          key={i} 
                          src={img} 
                          alt={`${project.title} page ${i + 1}`} 
                          className="w-full h-full object-cover shrink-0 snap-center transition-transform duration-1000 group-hover/card:scale-110 opacity-80"
                        />
                      ))}
                    </div>
                    {/* Embedded inner dots */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm opacity-0 group-hover/innercarousel:opacity-100 transition-opacity duration-300">
                      {project.images.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      ))}
                    </div>
                  </>
                ) : project.image || project.imageUrl ? (
                  <img 
                    src={project.image || project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover/card:scale-110 opacity-80"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Briefcase className="w-20 h-20 text-white/20" />
                  </div>
                )}
                
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 z-10 pointer-events-none"></div>
                {/* Glowing Overlay on hover */}
                <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              </div>

              {/* Content Area (Overlaid on Image) */}
              <div className="p-6 md:p-8 flex flex-col justify-end flex-grow text-left relative z-20 h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] md:text-xs uppercase font-extrabold text-white tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white group-hover/card:text-primary-400 transition-colors duration-300 mb-3 drop-shadow-lg">{project.title}</h4>
                <p className="text-sm md:text-base text-gray-300 line-clamp-3 font-medium mb-6 drop-shadow">{project.description}</p>
                
                <div className="mt-auto flex items-center justify-start pt-2">
                  <Link to="/projects" state={{ selectedProject: project.title }} className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform group-hover/card:translate-x-2">
                    View Project Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default ProjectsSection;
