import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Developer", "Designer", "Creator", "Innovator", "Portfolio"];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Word cycling interval
    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 450);

    // Wait a bit to ensure a smooth transition and let assets load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loader to show words

    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* Name Text Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-10 text-center flex flex-col items-center"
          >
            <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-primary-500 to-yellow-400 tracking-[0.2em] md:tracking-[0.3em] drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]">
              SALOMSAN
            </h1>
            <div className="w-16 h-[2px] bg-primary-500/50 mt-5 rounded-full"></div>
          </motion.div>

          {/* Loading Bar Container */}
          <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner">
            {/* Animated Loading Bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 via-primary-500 to-yellow-400 rounded-full"
            />
          </div>

          {/* Cycling Words */}
          <div className="mt-8 h-4 relative w-full flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] font-black tracking-[0.4em] text-primary-400 uppercase absolute"
              >
                {words[wordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
