const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./src/models/Project');
const Certificate = require('./src/models/Certificate');

dotenv.config();

const projectsData = [
  {
    title: "Salon Management System",
    description: "Developed a customer booking workflow with validation and exception handling, applied OOP and basic MVC architecture, implemented backend error handling using Spring Boot, and ensured reliable API integration.",
    technologies: ["Java", "MySQL", "Spring Boot"],
    image: "/src/assets/images/placeholder.jpg",
    githubUrl: "https://github.com",
    liveDemoUrl: "",
    contribution: "My Contribution — To be updated"
  },
  {
    title: "Task Management System",
    description: "Developed and deployed a responsive full-stack web application, connecting a dynamic front-end UI with a RESTful API backend hosted securely on AWS infrastructure.",
    technologies: ["JavaScript", "PostgreSQL", "Node.js", "Express", "AWS"],
    image: "/src/assets/images/placeholder.jpg",
    githubUrl: "https://github.com",
    liveDemoUrl: "",
    contribution: "My Contribution — To be updated"
  }
];

const certificatesData = [
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2025"
  },
  {
    title: "AI Chatbot & Machine Learning",
    issuer: "DevTown",
    year: "2026"
  },
  {
    title: "AI Foundation Certificate Course",
    issuer: "Informatics Institute of Technology",
    year: "2025 - 2026 (Currently reading)"
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');
    
    // Clear existing data
    await Project.deleteMany();
    await Certificate.deleteMany();
    
    // Insert new data
    await Project.insertMany(projectsData);
    await Certificate.insertMany(certificatesData);
    
    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
