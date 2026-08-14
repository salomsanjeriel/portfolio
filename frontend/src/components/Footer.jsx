import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-white/5 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.</p>
        <p className="mt-2 text-xs">University PPD II Profile Evaluation Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
