import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import TiltCard from '../components/motion/TiltCard';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        const mergedProjects = data.map(backendProj => {
          const frontendProj = portfolioData.projects.find(p => p.title === backendProj.title);
          return { ...backendProj, ...frontendProj };
        });
        setProjects(mergedProjects.length > 0 ? mergedProjects : portfolioData.projects);
      } catch (error) {
        setProjects(portfolioData.projects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <ScrollReveal className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[2rem] p-8 md:p-10" id="projects">
      <ScrollRevealItem>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-primary-200 flex items-center justify-center shadow-sm">
              <Briefcase className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold text-textMain tracking-tight">Featured Projects</h3>
          </div>
          <Link to="/projects" className="btn-secondary px-4 py-2 text-xs group flex items-center shadow-sm">
            View All <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollRevealItem>
      
      {loading ? (
        <div className="text-center text-primary-500 py-12 animate-pulse font-bold tracking-widest text-sm uppercase">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <ScrollRevealItem key={idx}>
              <TiltCard className="h-full">
                {({ contentX, contentY, isHovered }) => (
                  <Link to="/projects" state={{ selectedProject: project.title }} className={`block w-full bg-[#F8F9FA] rounded-3xl border ${isHovered ? 'border-primary-300 shadow-[0_8px_30px_rgba(249,115,22,0.1)]' : 'border-gray-200'} overflow-hidden flex flex-col md:flex-row transition-colors duration-500 group/link`}>
                    
                    {/* Left Side: Content Preview */}
                    <div className="p-8 flex flex-col justify-center w-full md:w-1/2 relative z-10 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] uppercase font-bold text-primary-600 tracking-wider bg-orange-100 px-2 py-1 rounded border border-orange-200">
                          {project.technologies[0]}
                        </span>
                        {project.technologies.length > 1 && (
                          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider bg-gray-100 px-2 py-1 rounded border border-gray-200">
                            +{project.technologies.length - 1} MORE
                          </span>
                        )}
                      </div>
                      <h4 className={`text-2xl md:text-3xl font-extrabold mb-4 transition-colors tracking-tight ${isHovered ? 'text-primary-500' : 'text-textMain'}`}>{project.title}</h4>
                      <p className="text-sm md:text-base text-gray-500 mb-8 line-clamp-2 md:line-clamp-3 font-medium leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mt-auto">
                        <span className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 group-hover/link:border-primary-500 text-textMain group-hover/link:text-white rounded-xl text-sm font-bold transition-all group-hover/link:bg-primary-500 group-hover/link:shadow-[0_4px_15px_rgba(249,115,22,0.3)]">
                          Explore Project Gallery <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                    
                    {/* Right Side: Small Image Preview */}
                    <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center p-6 bg-white perspective-[1000px]">
                      <motion.div 
                        style={{ x: contentX, y: contentY }}
                        className="w-full aspect-video bg-gray-100 rounded-xl border border-gray-200 relative shadow-xl overflow-hidden group/cardcarousel"
                      >
                        {/* Fake Browser Bar */}
                        <div className="h-4 bg-gray-50 border-b border-gray-200 flex items-center px-2 space-x-1 absolute top-0 left-0 right-0 z-30">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        </div>
                        
                        <div className="w-full h-full pt-4 relative bg-[#F1F3F5]">
                          {project.image ? (
                            <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`} />
                          ) : project.imageUrl ? (
                            <img src={project.imageUrl} alt={project.title} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`} />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs font-bold">Preview Image</div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black/5 pointer-events-none opacity-0 group-hover/cardcarousel:opacity-100 transition-opacity">
                        </div>
                      </motion.div>
                    </div>
                    
                  </Link>
                )}
              </TiltCard>
            </ScrollRevealItem>
          ))}
        </div>
      )}
    </ScrollReveal>
  );
};

export default ProjectsSection;
