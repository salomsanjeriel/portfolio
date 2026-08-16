import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import TiltCard from '../components/motion/TiltCard';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = portfolioData.projects;

  return (
    <ScrollReveal className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-[2rem] p-6 md:p-10 transition-colors duration-700" id="projects">
      <ScrollRevealItem>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-primary-200 dark:border-primary-500/30 flex items-center justify-center shadow-sm transition-colors">
              <Briefcase className="w-6 h-6 text-primary-500 dark:text-orange-400" />
            </div>
            <h3 className="text-3xl font-extrabold text-textMain dark:text-white tracking-tight transition-colors">Featured Projects</h3>
          </div>
          <Link to="/projects" className="btn-secondary dark:bg-white/5 dark:text-white dark:border-white/20 px-5 py-2.5 rounded-xl text-sm font-bold group flex items-center shadow-sm hover:shadow-md transition-all">
            Explore All Work <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollRevealItem>

      {/* Premium Uniform Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <ScrollRevealItem key={idx}>
            <TiltCard className="w-full h-[450px]">
              {({ isHovered }) => (
                <Link to="/projects" state={{ selectedProject: project.title }} className="block w-full h-full relative rounded-[2rem] overflow-hidden group/bento border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-900">

                  {/* Background Image (The UI) */}
                  <div className="absolute inset-0 w-full h-full">
                    {project.image || project.imageUrl ? (
                      <img
                        src={project.image || project.imageUrl}
                        alt={project.title}
                        className={`w-full h-full object-cover object-top transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">No Image Preview</div>
                    )}
                  </div>

                  {/* Dramatic Dark Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-80'}`}></div>

                  {/* Colored Glow overlay on hover */}
                  <div className={`absolute inset-0 bg-primary-500/20 mix-blend-overlay transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                  {/* Content Container - Bottom Aligned */}
                  <div className="absolute inset-0 p-6 md:p-10 z-20 flex flex-col justify-end">

                    {/* Floating Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover/bento:translate-y-0 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 ease-out">
                      {project.technologies.slice(0, idx === 0 ? 5 : 3).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] md:text-xs uppercase font-extrabold text-white tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h4 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight transition-colors duration-300 drop-shadow-lg ${isHovered ? 'text-primary-400' : ''}`}>
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-2xl mb-8 drop-shadow-md font-medium">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <div className="transform translate-y-8 group-hover/bento:translate-y-0 opacity-0 group-hover/bento:opacity-100 transition-all duration-500 delay-75">
                      <span className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                        View Full Gallery <ArrowRight className="w-5 h-5 ml-2 group-hover/bento:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>
                </Link>
              )}
            </TiltCard>
          </ScrollRevealItem>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default ProjectsSection;
