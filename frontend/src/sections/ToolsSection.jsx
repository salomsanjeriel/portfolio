import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiAndroidstudio, 
  SiFigma, 
  SiGooglegemini, 
  SiAnthropic, 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiMysql, 
  SiMongodb 
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Code2, X } from 'lucide-react';

const toolData = [
  {
    category: "DEVELOPMENT",
    tools: [
      { name: "VS Code", icon: VscVscode, usage: "Used for coding and development.", color: "#007ACC" },
      { name: "Android Studio", icon: SiAndroidstudio, usage: "Used for Android application development.", color: "#3DDC84" },
      { name: "Antigravity", icon: Code2, usage: "Used for AI-assisted application development.", color: "#7C3AED" },
    ]
  },
  {
    category: "DESIGN",
    tools: [
      { name: "Figma", icon: SiFigma, usage: "Used for UI/UX design and interface planning.", color: "#F24E1E" },
    ]
  },
  {
    category: "AI TOOLS",
    tools: [
      { name: "Gemini", icon: SiGooglegemini, usage: "Used as an AI-assisted productivity and development tool.", color: "#8E75B2" },
      { name: "Claude", icon: SiAnthropic, usage: "Used as an AI-assisted productivity and development tool.", color: "#D97757" },
    ]
  },
  {
    category: "TECHNOLOGIES",
    tools: [
      { name: "C++", icon: SiCplusplus, usage: "Used for system programming and performance-critical tasks.", color: "#00599C" },
      { name: "Java", icon: FaJava, usage: "Used for enterprise backend systems and OOP.", color: "#007396" },
      { name: "Python", icon: SiPython, usage: "Used for scripting and general-purpose development.", color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, usage: "Used for frontend and full-stack web development.", color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, usage: "Used for web page structure.", color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, usage: "Used for web styling and responsive design.", color: "#1572B6" },
      { name: "MySQL", icon: SiMysql, usage: "Used for relational database management.", color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, usage: "Used for NoSQL database management.", color: "#47A248" },
      { name: "AWS", icon: FaAws, usage: "Used for cloud hosting and infrastructure.", color: "#232F3E" },
    ]
  }
];

const ToolItem = ({ tool, category, onClickTool }) => {
  return (
    <div 
      className="relative group cursor-pointer mx-3 flex items-center justify-center px-6 py-4 rounded-2xl bg-surface/40 border border-primary-500/10 hover:border-primary-400/50 hover:bg-surfaceHover transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.25)] hover:-translate-y-1 backdrop-blur-md"
      onClick={() => onClickTool({ ...tool, category })}
    >
       {/* Icon with scaling and brightening on hover */}
       <tool.icon 
         className="w-8 h-8 text-gray-400 group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" 
         style={{ color: tool.color }} 
       />
       {/* Accent color text on hover */}
       <span className="ml-4 font-bold text-gray-300 group-hover:text-primary-300 transition-colors whitespace-nowrap tracking-wide">
         {tool.name}
       </span>
       
       {/* Glass highlight overlay */}
       <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const MarqueeRow = ({ tools, onClickTool }) => {
  // Ensure the list is long enough to span the screen at least once.
  const duplications = Math.max(2, Math.ceil(12 / tools.length));
  const repeatedTools = Array(duplications).fill(tools).flat();
  
  return (
    <div className="mb-10 w-full relative">
      {/* Marquee container with fade edges */}
      <div 
        className="relative flex overflow-hidden w-full group py-4"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex w-max hover:[animation-play-state:paused] animate-[marquee_45s_linear_infinite]">
           <div className="flex w-max justify-around pr-4">
             {repeatedTools.map((tool, idx) => (
                <ToolItem key={`a-${idx}`} tool={tool} category={tool.category} onClickTool={onClickTool} />
             ))}
           </div>
           <div className="flex w-max justify-around pr-4">
             {repeatedTools.map((tool, idx) => (
                <ToolItem key={`b-${idx}`} tool={tool} category={tool.category} onClickTool={onClickTool} />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

const ToolsSection = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <section className="w-full py-10 relative" id="tools">
      
      <div className="mb-12 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center">
          Tools <span className="text-primary-500 mx-2">&</span> Technologies
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          A showcase of the modern development, design, and AI tools I actively use to build digital products.
        </p>
      </div>

      <div className="w-full flex flex-col mt-4">
        <MarqueeRow 
          tools={toolData.flatMap(data => data.tools.map(t => ({ ...t, category: data.category })))}
          onClickTool={setSelectedTool} 
        />
      </div>

      {/* Modal / Popover for Tool Details */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-surface border border-primary-500/20 p-8 rounded-3xl shadow-[0_0_50px_rgba(124,58,237,0.15)] max-w-sm w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="p-4 rounded-2xl bg-surfaceHover border border-primary-500/10 shadow-inner"
                  style={{ boxShadow: `0 0 20px ${selectedTool.color}20` }}
                >
                  <selectedTool.icon className="w-10 h-10" style={{ color: selectedTool.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTool.name}</h3>
                  <span className="text-xs font-bold text-primary-400 tracking-wider uppercase">
                    {selectedTool.category}
                  </span>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-xl p-4 border border-white/5">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedTool.usage}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ToolsSection;
