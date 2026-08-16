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
      { name: "Antigravity", icon: Code2, usage: "Used for AI-assisted application development.", color: "#ea580c" },
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
      className="relative group cursor-pointer mx-3 flex items-center justify-center px-6 py-4 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500 hover:bg-orange-50 dark:hover:bg-primary-500/10 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)] hover:-translate-y-1"
      onClick={() => onClickTool({ ...tool, category })}
    >
       <tool.icon 
         className="w-8 h-8 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" 
         style={{ color: tool.color }} 
       />
       <span className="ml-4 font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-white transition-colors whitespace-nowrap tracking-wide">
         {tool.name}
       </span>
    </div>
  );
};

const MarqueeRow = ({ tools, onClickTool }) => {
  const duplications = Math.max(2, Math.ceil(12 / tools.length));
  const repeatedTools = Array(duplications).fill(tools).flat();
  
  return (
    <div className="mb-10 w-full relative">
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
    <section className="w-full py-10 relative transition-colors duration-700" id="tools">
      
      <div className="mb-12 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-textMain dark:text-white tracking-tight flex items-center transition-colors">
          Tools <span className="text-primary-500 dark:text-orange-400 mx-2 transition-colors">&</span> Technologies
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl font-medium transition-colors">
          A showcase of the modern development, design, and AI tools I actively use to build digital products.
        </p>
      </div>

      <div className="w-full flex flex-col mt-4">
        <MarqueeRow 
          tools={toolData.flatMap(data => data.tools.map(t => ({ ...t, category: data.category })))}
          onClickTool={setSelectedTool} 
        />
      </div>

      <AnimatePresence>
        {selectedTool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-2xl max-w-sm w-full relative transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm transition-colors"
                >
                  <selectedTool.icon className="w-10 h-10" style={{ color: selectedTool.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textMain dark:text-white transition-colors">{selectedTool.name}</h3>
                  <span className="text-xs font-bold text-primary-500 dark:text-orange-400 tracking-wider uppercase transition-colors">
                    {selectedTool.category}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 border border-gray-200 dark:border-white/10 transition-colors">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
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
