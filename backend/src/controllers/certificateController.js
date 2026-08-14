const Certificate = require('../models/Certificate');

// Static fallback data if MongoDB isn't connected yet
const fallbackCertificates = [
  {
    _id: "1",
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2025"
  },
  {
    _id: "2",
    title: "AI Chatbot & Machine Learning",
    issuer: "DevTown",
    year: "2026"
  },
  {
    _id: "3",
    title: "AI Foundation Certificate Course",
    issuer: "Informatics Institute of Technology",
    year: "2025 - 2026 (Currently reading)"
  }
];

// @desc    Fetch all certificates
// @route   GET /api/certificates
const getCertificates = async (req, res) => {
  try {
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      // Return fallback data if DB is not connected
      return res.json(fallbackCertificates);
    }
    
    const certificates = await Certificate.find({});
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getCertificates };
