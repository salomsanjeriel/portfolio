import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, FileCode, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/projects');
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects", error);
        // Fallback if backend is not running
        setProjects(portfolioData.projects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-8 md:p-10"
      id="projects"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.15)]">
            <Briefcase className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h3>
        </div>
        <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs group">
          View All <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      {loading ? (
        <div className="text-center text-primary-400 py-12 animate-pulse font-bold tracking-widest text-sm uppercase">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#110820] rounded-3xl border border-white/5 overflow-hidden group flex flex-col hover:border-primary-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-500">
              <div className="p-8 pb-0 flex-grow relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="tech-pill">
                    {project.technologies.slice(0,3).join(' • ')}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors tracking-tight">{project.title}</h4>
                <p className="text-base text-gray-400 mb-8 line-clamp-3 font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-3 mb-6">
                  <button onClick={() => setSelectedProject(project)} className="flex items-center px-4 py-2 bg-surfaceHover border border-white/10 hover:border-white/30 text-white rounded-full text-xs font-medium transition-all group/btn">
                    View Project <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-surfaceHover border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <FileCode className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="relative mt-auto pt-6 px-6 overflow-hidden flex justify-center">
                <div className="w-full max-w-[90%] aspect-[16/10] bg-surfaceHover rounded-t-xl border-t border-l border-r border-white/10 relative shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-4 bg-background border-b border-white/10 flex items-center px-2 space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                  </div>
                  {project.image && !project.image.includes('placeholder') ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : project.imageUrl && !project.imageUrl.includes('placeholder') ? (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="w-full h-full bg-background flex flex-col px-4 py-3">
                       <div className="h-2 w-1/3 bg-white/10 rounded mb-4"></div>
                       <div className="grid grid-cols-3 gap-2 mb-2">
                         <div className="h-16 bg-white/5 rounded"></div>
                         <div className="h-16 bg-white/5 rounded"></div>
                         <div className="h-16 bg-white/5 rounded"></div>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-surface border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-surfaceHover border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="h-64 bg-surfaceHover relative overflow-hidden flex items-center justify-center">
              {selectedProject.image && !selectedProject.image.includes('placeholder') ? (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              ) : selectedProject.imageUrl && !selectedProject.imageUrl.includes('placeholder') ? (
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              ) : (
                <Briefcase className="w-16 h-16 text-gray-700 opacity-50" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            </div>
            
            <div className="p-8 -mt-10 relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[10px] uppercase font-bold text-primary-400 tracking-wider bg-primary-900/20 px-2 py-1 rounded border border-primary-500/10">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Project Overview</h4>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">My Contribution</h4>
                  <p className="text-primary-300 leading-relaxed bg-primary-900/10 p-4 rounded-xl border border-primary-500/10">
                    {selectedProject.contribution}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-white/5">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 bg-surfaceHover border border-white/10 hover:border-white/30 text-white rounded-xl text-sm font-medium transition-all group/btn">
                    <FileCode className="w-4 h-4 mr-2" /> View Code
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsSection;
