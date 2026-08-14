import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Send, Mail, Download } from 'lucide-react';

const ContactSection = () => {
  const { email } = portfolioData.contact;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-8 md:p-12 relative overflow-hidden"
      id="contact"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900/30 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Let's Work Together</h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            I'm currently open to internship opportunities and exciting projects. Let's build something amazing together!
          </p>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 mt-8">
          <a href={`mailto:${portfolioData.contact.email}`} className="btn-primary group">
            Get In Touch <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/resume.pdf" target="_blank" className="btn-secondary group">
            Download CV <Download className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
