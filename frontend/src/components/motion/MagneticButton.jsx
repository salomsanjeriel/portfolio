import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = "", onClick, href, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  const handleMouse = (e) => {
    if (isTouchDevice || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Limit movement to max 8px for subtlety
    const moveX = Math.max(-8, Math.min(8, middleX * 0.2));
    const moveY = Math.max(-8, Math.min(8, middleY * 0.2));
    setPosition({ x: moveX, y: moveY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
