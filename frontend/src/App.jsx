import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ToolsSection from './sections/ToolsSection';
import ProjectsSection from './sections/ProjectsSection';
import StatsSection from './sections/StatsSection';
import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080310] text-gray-300 font-sans relative overflow-x-hidden">
      
      {/* Intense Ambient Background Glows */}
      <div className="fixed top-0 left-1/4 w-[1000px] h-[1000px] bg-primary-600/10 rounded-full blur-[200px] pointer-events-none -z-10 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-primary-900/15 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-8 z-10 relative">
        <HeroSection />
        
        <div className="grid grid-cols-1 gap-8">
          <AboutSection />
        </div>
        
        <ToolsSection />
        
        <ProjectsSection />
        
        <StatsSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EducationSection />
          <CertificationsSection />
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
