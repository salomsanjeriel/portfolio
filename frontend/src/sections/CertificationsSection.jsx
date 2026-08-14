import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/certificates');
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching certificates", error);
        // Fallback if backend is not running
        setCertifications(portfolioData.certifications);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-hover p-8 md:p-10 h-full flex flex-col"
      id="certifications"
    >
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-primary-900/40 border border-primary-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.15)]">
            <Star className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Certifications</h3>
        </div>
        <a href="#" className="btn-secondary px-4 py-2 text-xs group">
          View All
        </a>
      </div>
      
      {loading ? (
        <div className="text-center text-primary-400 py-6 animate-pulse">Loading certificates...</div>
      ) : (
        <div className="flex flex-col space-y-4 flex-grow">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-white/5 hover:border-primary-500/20 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-primary-400" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-sm font-bold text-white truncate group-hover:text-primary-400 transition-colors">{cert.title}</h4>
                <p className="text-xs text-gray-500 truncate">{cert.issuer}</p>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <span className="text-xs font-medium text-gray-400">{cert.year ? cert.year.replace(' (Currently reading)', '') : ''}</span>
                {cert.year && cert.year.includes('reading') && (
                  <span className="text-[10px] bg-primary-900/40 text-primary-300 px-2 py-0.5 rounded-full border border-primary-500/20">Reading</span>
                )}
                {cert.year && !cert.year.includes('reading') && (
                  <Calendar className="w-3.5 h-3.5 text-gray-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CertificationsSection;
