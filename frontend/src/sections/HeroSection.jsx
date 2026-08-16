import React, { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, FileCode, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

const HoverText = ({ text, className }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          whileHover={{
            scale: 1.15,
            y: -8,
            rotate: [0, -6, 6, -6, 6, 0],
            transition: {
              rotate: {
                repeat: Infinity,
                duration: 0.4,
                ease: "linear"
              },
              scale: { type: "spring", stiffness: 300, damping: 10 },
              y: { type: "spring", stiffness: 300, damping: 10 }
            }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const { name, summary, photoUrl } = portfolioData.hero;

  // Parallax Setup
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax values mapping
  const imageX = useTransform(smoothX, [-0.5, 0.5], ["-15px", "15px"]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], ["-15px", "15px"]);

  const badgeX = useTransform(smoothX, [-0.5, 0.5], ["-25px", "25px"]);
  const badgeY = useTransform(smoothY, [-0.5, 0.5], ["-25px", "25px"]);

  const ringX = useTransform(smoothX, [-0.5, 0.5], ["20px", "-20px"]);
  const ringY = useTransform(smoothY, [-0.5, 0.5], ["20px", "-20px"]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20 lg:pt-32 min-h-[85vh] relative overflow-hidden transition-colors duration-700"
    >
      {/* Left side: Intro text */}
      <ScrollReveal className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 z-10 px-4 md:px-8">

        <ScrollRevealItem className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 text-[11px] font-extrabold text-primary-500 dark:text-orange-400 uppercase tracking-[0.2em] rounded-full transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary-500 dark:bg-orange-400 mr-2 animate-pulse"></span>
            IT UNDERGRADUATE
          </span>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-textMain dark:text-white mb-2 leading-[1.1] tracking-tight transition-colors">
            Hello, I'm
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-primary-500 mb-2 leading-[1.1] tracking-tight flex flex-wrap">
            <HoverText text="Sivapalan Jeriel" />
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-[#FACC15] mb-6 leading-[1.1] tracking-tight drop-shadow-sm flex flex-wrap">
            <HoverText text="Salomsan" />
          </h1>
        </ScrollRevealItem>

        <ScrollRevealItem>
          <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium transition-colors">
            {summary.split('.')[0]}. {summary.split('.')[1]}.
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem className="flex flex-wrap items-center gap-4 mb-10">
          <a href="/projects" className="flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-sm font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]">
            Explore My Work <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a href="/#contact" className="flex items-center justify-center px-8 py-4 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-textMain dark:text-white border-2 border-gray-200 dark:border-white/10 rounded-full text-sm font-bold transition-all duration-300 shadow-sm">
            Contact Me <Mail className="ml-2 w-4 h-4 text-gray-400 dark:text-gray-300" />
          </a>
        </ScrollRevealItem>

        <ScrollRevealItem className="flex items-center space-x-4">
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-2 transition-colors">Find me on</span>
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-orange-100 dark:border-white/10 flex items-center justify-center text-orange-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-300 hover:bg-orange-50 dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-orange-100 dark:border-white/10 flex items-center justify-center text-orange-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-300 hover:bg-orange-50 dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="w-12 h-12 rounded-full border-2 border-orange-100 dark:border-white/10 flex items-center justify-center text-orange-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-300 hover:bg-orange-50 dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-md">
            <Mail className="w-5 h-5" />
          </a>
        </ScrollRevealItem>
      </ScrollReveal>

      {/* Right side: Clean Photo & Badge Parallax with Movable Effects */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-center relative h-[450px] md:h-[600px] z-10"
      >

        {/* Animated Background Blobs */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-orange-200 to-orange-400 opacity-20 blur-3xl rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-bl from-yellow-200 to-yellow-400 opacity-20 blur-3xl rounded-[70%_30%_30%_70%/70%_70%_30%_30%] z-0"
        />

        {/* Floating Decorative Elements */}
        <motion.div style={{ x: ringX, y: ringY }} className="absolute inset-0 z-0 pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0], rotate: 360 }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[10%] left-[10%] text-orange-300">✦</motion.div>
          <motion.div animate={{ y: [0, 20, 0], rotate: -360 }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[20%] right-[10%] text-yellow-400">✦</motion.div>
          <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[30%] right-[5%] w-3 h-3 rounded-full border-2 border-orange-300"></motion.div>
          <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-[10%] left-[15%] w-4 h-4 rounded-full border-2 border-yellow-300"></motion.div>
        </motion.div>

        {/* Premium Attractive Photo Container - Mockup Style */}
        <div className="relative w-full max-w-[450px] md:max-w-[550px] z-10 flex justify-center mt-10 md:mt-0 group">

          {/* Intense Glow Behind Image */}
          <div className="absolute inset-1/4 bg-orange-600 rounded-full blur-[80px] opacity-70 pointer-events-none z-0"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[10%] w-2 h-2 rotate-45 bg-orange-400"></motion.div>
            <motion.div animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-yellow-400"></motion.div>
            <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[40%] left-[5%] w-2 h-2 border border-orange-500 rounded-full"></motion.div>
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-[20%] right-[10%] text-orange-400 text-xs">✦</motion.div>
            <motion.div animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[10%] right-[30%] w-1 h-1 bg-white rounded-full"></motion.div>
            <motion.div animate={{ rotate: 360, opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-[30%] left-[20%] text-orange-500 text-sm">✦</motion.div>
          </div>

          {/* Actual Image Card - Borderless */}
          <motion.div
            style={{ x: imageX, y: imageY }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-full z-10 cursor-pointer"
          >
            {/* The Image (Assumed transparent PNG cutout) */}
            <motion.img
              src={photoUrl}
              alt={name}
              className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />

            {/* Signature at bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-4 right-4 z-20"
            >
              <span
                className="text-4xl md:text-6xl text-orange-400 opacity-90 rotate-[-5deg] inline-block font-medium drop-shadow-md"
                style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}
              >
                Salomsan
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Continuous Floating Badge */}
        <motion.div
          style={{ x: badgeX, y: badgeY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ y: [0, -12, 0], opacity: 1 }}
          transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.6, duration: 1 } }}
          className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-12 bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 shadow-[0_15px_40px_rgba(249,115,22,0.12)] border border-orange-50 dark:border-white/10 z-20 transition-colors"
        >
          <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-1 font-bold uppercase tracking-widest transition-colors">Open to</div>
          <div className="text-base font-extrabold text-[#C2410C] dark:text-orange-400 mb-2 transition-colors">Internship Opportunities</div>
          <div className="flex items-center text-[10px] font-bold text-gray-500">
            <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></motion.span>
            Available for Opportunities
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
