import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  Building, 
  Target, 
  Briefcase, 
  Terminal, 
  Server, 
  Database, 
  Cloud, 
  Layout, 
  Sparkles,
  BookOpen,
  Wrench,
  TrendingUp,
  Code2
} from 'lucide-react';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const capabilities = [
    {
      title: "Web Development",
      description: "Build responsive web interfaces and interactive web applications using modern frontend technologies.",
      icon: <Layout className="w-6 h-6 text-primary-500 dark:text-orange-400 transition-colors" />
    },
    {
      title: "Backend Development",
      description: "Develop backend services and REST APIs and connect applications with databases.",
      icon: <Server className="w-6 h-6 text-blue-500 dark:text-blue-400 transition-colors" />
    },
    {
      title: "Database Integration",
      description: "Work with relational and NoSQL databases and integrate application data with backend systems.",
      icon: <Database className="w-6 h-6 text-emerald-500 dark:text-emerald-400 transition-colors" />
    },
    {
      title: "Cloud & Deployment",
      description: "Deploy and host web applications using cloud platforms such as AWS.",
      icon: <Cloud className="w-6 h-6 text-sky-500 dark:text-sky-400 transition-colors" />
    },
    {
      title: "UI & Prototyping",
      description: "Design and plan user interfaces and application experiences using tools such as Figma.",
      icon: <Sparkles className="w-6 h-6 text-pink-500 dark:text-pink-400 transition-colors" />
    },
    {
      title: "AI-Assisted Development",
      description: "Use modern AI tools such as Gemini, Claude and Antigravity to support learning, development and productivity.",
      icon: <Code2 className="w-6 h-6 text-indigo-500 dark:text-indigo-400 transition-colors" />
    }
  ];

  const exploring = [
    "AI-Assisted Development",
    "Cloud Deployment",
    "Modern Web Development",
    "REST APIs",
    "Backend Development",
    "UI/UX Design"
  ];

  return (
    <section id="about" className="w-full relative rounded-[2rem] overflow-hidden my-8 antialiased transition-colors duration-700 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-2xl">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] transition-colors duration-1000 bg-orange-500/5 dark:bg-orange-600/10" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] transition-colors duration-1000 bg-yellow-500/5 dark:bg-yellow-600/10" />
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        {/* TOP SECTION: Intro & Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Introduction */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center mt-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 mb-6">
              <span className="text-primary-600 dark:text-orange-400 font-mono text-sm tracking-wider font-bold transition-colors">// WHO I AM</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-textMain dark:text-white mb-6 tracking-tight transition-colors">
              Building. Learning. Exploring.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-xl text-primary-600/90 dark:text-orange-300 font-semibold mb-8 transition-colors">
              "I'm an IT undergraduate who enjoys turning ideas into practical digital solutions."
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium transition-colors">
              <p>
                I’m an enthusiastic Information Technology undergraduate at the University of Kelaniya, with a strong interest in software development, web technologies and emerging technology.
              </p>
              <p>
                I enjoy building practical applications and learning how different parts of a system work together from designing a user interface and developing backend APIs to working with databases and deploying applications.
              </p>
              <p>
                I’m continuously improving my technical skills through academic projects, personal learning and hands-on experimentation with modern development tools.
              </p>
              <p>
                My current goal is to gain real-world industry experience through an IT internship, contribute to meaningful projects, and continue growing as a developer.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Developer Snapshot */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-full border rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group bg-white dark:bg-white/5 dark:backdrop-blur-md border-gray-100 dark:border-white/10 hover:border-primary-200 dark:hover:bg-white/[0.07] shadow-sm hover:shadow-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100 bg-gradient-to-bl from-primary-500/5 dark:from-primary-500/20 to-transparent" />
              
              <h3 className="text-xl font-bold text-textMain dark:text-white mb-8 flex items-center transition-colors">
                <Terminal className="w-5 h-5 mr-3 text-primary-500 dark:text-orange-400 transition-colors" /> Developer Snapshot
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 font-mono tracking-wider mb-1">LOCATION</span>
                    <span className="text-textMain dark:text-gray-200 font-medium transition-colors">Batticaloa, Sri Lanka</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="w-5 h-5 text-gray-400 mr-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 font-mono tracking-wider mb-1">EDUCATION</span>
                    <span className="text-textMain dark:text-gray-200 font-medium transition-colors">BSc (Hons) in Information Technology</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building className="w-5 h-5 text-gray-400 mr-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 font-mono tracking-wider mb-1">UNIVERSITY</span>
                    <span className="text-textMain dark:text-gray-200 font-medium transition-colors">University of Kelaniya</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-gray-400 mr-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500 font-mono tracking-wider mb-1">CURRENT FOCUS</span>
                    <span className="text-textMain dark:text-gray-200 font-medium transition-colors">IT Internship + Practical Development</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="w-5 h-5 text-primary-500 dark:text-orange-400 mr-4 mt-0.5 shrink-0 transition-colors" />
                  <div>
                    <span className="block text-xs text-primary-600 dark:text-orange-400 font-mono tracking-wider mb-1 font-bold transition-colors">STATUS</span>
                    <span className="px-3 py-1 rounded-full text-sm inline-block border font-bold transition-colors text-primary-700 dark:text-white bg-primary-50 dark:bg-primary-500/20 border-primary-200 dark:border-primary-500/30">
                      Open to Internship Opportunities
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: What I Can Do */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center mb-10"
          >
            <h3 className="text-2xl font-bold text-textMain dark:text-white transition-colors">WHAT I CAN DO</h3>
            <div className="h-px flex-grow ml-6 transition-colors bg-gradient-to-r from-gray-200 dark:from-white/20 to-transparent" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="border rounded-2xl p-6 transition-all duration-300 group cursor-default bg-white dark:bg-white/[0.03] border-gray-100 dark:border-white/5 hover:border-primary-300 dark:hover:border-primary-500/50 hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] dark:hover:bg-white/[0.06]"
              >
                <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 group-hover:bg-primary-50">
                  {cap.icon}
                </div>
                <h4 className="text-lg font-bold text-textMain dark:text-white mb-3 transition-colors">{cap.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Exploring & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold text-textMain dark:text-white mb-6 flex items-center transition-colors">
              <span className="w-2 h-2 rounded-full mr-3 animate-pulse transition-colors bg-primary-500 dark:bg-orange-400" />
              CURRENTLY EXPLORING
            </h3>
            <div className="flex flex-wrap gap-3">
              {exploring.map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border rounded-full text-sm font-bold transition-all cursor-default shadow-sm bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-white hover:border-primary-300 dark:hover:border-orange-400/50 hover:bg-primary-50 dark:hover:bg-orange-900/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* My Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold text-textMain dark:text-white mb-8 transition-colors">MY APPROACH</h3>
            <div className="flex flex-col md:flex-row gap-6 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-6 right-6 h-px transition-colors bg-gray-200 dark:bg-white/10" />
              
              {/* Connecting line for mobile */}
              <div className="md:hidden absolute top-6 bottom-6 left-6 w-px transition-colors bg-gray-200 dark:bg-white/10" />

              <div className="flex-1 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 md:mb-4 transition-colors bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10">
                  <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-textMain dark:text-white font-bold text-sm mb-1 tracking-wider transition-colors">01 &mdash; LEARN</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">Understand the technology and continuously improve my knowledge.</p>
                </div>
              </div>

              <div className="flex-1 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 md:mb-4 transition-colors bg-white dark:bg-[#0a0a0a] border-primary-400 dark:border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)] dark:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  <Wrench className="w-5 h-5 text-primary-500 dark:text-orange-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-textMain dark:text-white font-bold text-sm mb-1 tracking-wider transition-colors">02 &mdash; BUILD</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">Turn concepts into practical projects and working applications.</p>
                </div>
              </div>

              <div className="flex-1 relative z-10 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 md:mb-4 transition-colors bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10">
                  <TrendingUp className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-textMain dark:text-white font-bold text-sm mb-1 tracking-wider transition-colors">03 &mdash; IMPROVE</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">Learn from each project and improve my technical and problem-solving skills.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
