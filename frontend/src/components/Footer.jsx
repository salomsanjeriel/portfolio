import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-gray-800 text-center text-sm text-gray-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.</p>
        <p className="mt-2 text-xs">University PPD II Profile Evaluation Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
