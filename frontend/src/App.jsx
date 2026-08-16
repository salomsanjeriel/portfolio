import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ToolsSection from './sections/ToolsSection';
import ProjectsSection from './sections/ProjectsSection';

import EducationSection from './sections/EducationSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';

import { motion, useScroll, useSpring } from 'framer-motion';
import SectionTimeline from './components/motion/SectionTimeline';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <Preloader />
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-textMain dark:text-white font-sans relative overflow-x-hidden transition-colors duration-700">

          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50 shadow-[0_0_10px_rgba(249,115,22,0.4)]"
            style={{ scaleX }}
          />

          {/* Ambient Animated Background Glows */}
          <motion.div
            animate={{
              opacity: [0.03, 0.06, 0.03],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="fixed top-0 left-1/4 w-[1000px] h-[1000px] bg-primary-500 dark:bg-violet-600 rounded-full blur-[200px] pointer-events-none -z-10 transition-colors duration-1000"
          />
          <motion.div
            animate={{
              opacity: [0.05, 0.08, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-yellow-400 dark:bg-blue-600 rounded-full blur-[150px] pointer-events-none -z-10 transition-colors duration-1000"
          />

          <Navbar />

          <Routes>
            <Route path="/" element={
              <main className="w-full px-4 md:px-8 lg:px-12 pt-32 pb-24 space-y-12 z-10 relative">
                <HeroSection />

                <div className="grid grid-cols-1 gap-8 mt-12">
                  <AboutSection />
                </div>

                <ToolsSection />

                <SectionTimeline>
                  {/* Projects Preview on Home Page */}
                  <ProjectsSection />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <EducationSection />
                    <CertificationsSection />
                  </div>

                  <ContactSection />
                </SectionTimeline>
              </main>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
