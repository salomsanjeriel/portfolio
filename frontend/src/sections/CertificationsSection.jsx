import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { Star, Calendar } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from '../components/motion/ScrollReveal';

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
        setCertifications(portfolioData.certifications);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <ScrollReveal className="glass-card card-hover p-8 md:p-10 h-full flex flex-col" id="certifications">
      <ScrollRevealItem className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-primary-200 flex items-center justify-center shadow-sm">
            <Star className="w-6 h-6 text-primary-500" />
          </div>
          <h3 className="text-2xl font-bold text-textMain tracking-tight">Certifications</h3>
        </div>
        <a href="#" className="btn-secondary px-4 py-2 text-xs group shadow-sm">
          View All
        </a>
      </ScrollRevealItem>
      
      {loading ? (
        <div className="text-center text-primary-500 py-6 animate-pulse font-bold">Loading certificates...</div>
      ) : (
        <div className="flex flex-col space-y-4 flex-grow">
          {certifications.map((cert, idx) => (
            <ScrollRevealItem key={idx}>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-bold text-textMain truncate group-hover:text-primary-600 transition-colors">{cert.title}</h4>
                  <p className="text-xs font-medium text-gray-500 truncate">{cert.issuer}</p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <span className="text-xs font-bold text-gray-400">{cert.year ? cert.year.replace(' (Currently reading)', '') : ''}</span>
                  {cert.year && cert.year.includes('reading') && (
                    <span className="text-[10px] bg-orange-50 text-primary-600 px-3 py-1 rounded-full border border-primary-200 font-bold uppercase tracking-widest">Reading</span>
                  )}
                  {cert.year && !cert.year.includes('reading') && (
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  )}
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </div>
      )}
    </ScrollReveal>
  );
};

export default CertificationsSection;
