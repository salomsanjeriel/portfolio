import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const TimelineNode = ({ top, delay }) => (
  <div className="absolute left-0 right-0 mx-auto w-5 h-5 flex items-center justify-center -translate-y-1/2" style={{ top }}>
    {/* Blinking glowing core */}
    <div className="w-3 h-3 rounded-[2px] rotate-45 bg-primary-500 shadow-[0_0_15px_rgba(249,115,22,1)] animate-pulse" style={{ animationDelay: delay, animationDuration: '1.5s' }}></div>
    {/* Outer expanding ring */}
    <div className="absolute inset-0 rounded-[2px] rotate-45 border-[2px] border-primary-500 animate-ping opacity-50" style={{ animationDelay: delay, animationDuration: '2s' }}></div>
  </div>
);

const SectionTimeline = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative w-full">
      {/* Content */}
      <div className="relative z-10 w-full space-y-12">
        {children}
      </div>
      
      {/* Timeline Wrapper - NOW UNDER CONTENT */}
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none hidden md:block z-0">
        
        {/* Background track line */}
        <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto w-[2px] bg-gray-200 dark:bg-white/10" />
        
        {/* Moving glowing line */}
        <motion.div 
          className="absolute top-0 bottom-0 left-0 right-0 mx-auto w-[2px] bg-primary-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] origin-top"
          style={{ scaleY }}
        />

        {/* Attractive Blinking Connecting Points */}
        <TimelineNode top="20%" delay="0s" />
        <TimelineNode top="40%" delay="0.5s" />
        <TimelineNode top="60%" delay="1s" />
        <TimelineNode top="80%" delay="1.5s" />
        
        {/* Epic Terminal Point at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto w-8 h-8 flex items-center justify-center translate-y-1/2">
          <div className="absolute inset-0 rounded-sm rotate-45 bg-primary-500 animate-ping opacity-50" style={{ animationDuration: '1.5s' }}></div>
          <div className="relative w-6 h-6 rounded-sm rotate-45 bg-primary-500 border-[3px] border-[#0a0a0a] shadow-[0_0_30px_rgba(249,115,22,1)] flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTimeline;
