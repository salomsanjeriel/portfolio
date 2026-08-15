import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Send, Mail, Download } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';
import MagneticButton from '../components/motion/MagneticButton';

const ContactSection = () => {
  const { email } = portfolioData.contact;

  return (
    <ScrollReveal className="glass-card p-8 md:p-12 relative overflow-hidden" id="contact">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <ScrollRevealItem>
            <h3 className="text-3xl md:text-4xl font-extrabold text-textMain mb-4 tracking-tight">Let's Work Together</h3>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              I'm currently open to internship opportunities and exciting projects. Let's build something amazing together!
            </p>
          </ScrollRevealItem>
          
          <ScrollRevealItem className="flex flex-col sm:flex-row gap-4 shrink-0 mt-8">
            <MagneticButton href={`mailto:${portfolioData.contact.email}`} className="btn-primary group">
              Get In Touch <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton href="/resume.pdf" className="btn-secondary group">
              Download CV <Download className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </ScrollRevealItem>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ContactSection;
