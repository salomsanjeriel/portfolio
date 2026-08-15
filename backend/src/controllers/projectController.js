const Project = require('../models/Project');

// Static fallback data if MongoDB isn't connected yet
const fallbackProjects = [
  {
    _id: "1",
    title: "Salon Management System",
    description: "Developed a customer booking workflow with validation and exception handling, applied OOP and basic MVC architecture, implemented backend error handling using Spring Boot, and ensured reliable API integration.",
    technologies: ["Java", "MySQL", "Spring Boot"],
    image: "/src/assets/images/placeholder.jpg",
    githubUrl: "https://github.com",
    liveDemoUrl: "",
    contribution: "My Contribution — To be updated"
  },
  {
    _id: "2",
    title: "Task Management System",
    description: "Developed and deployed a responsive full-stack web application, connecting a dynamic front-end UI with a RESTful API backend hosted securely on AWS infrastructure.",
    technologies: ["JavaScript", "PostgreSQL", "Node.js", "Express", "AWS"],
    image: "/src/assets/projects/task-manager-login.jpg",
    images: [
      "/src/assets/projects/task-manager-login.jpg",
      "/src/assets/projects/task-manager-1.jpg",
      "/src/assets/projects/task-manager-2.jpg",
      "/src/assets/projects/task-manager-3.jpg",
      "/src/assets/projects/task-manager-4.jpg",
      "/src/assets/projects/task-manager-5.jpg"
    ],
    githubUrl: "https://github.com/salomsanjeriel/Task-Management-System-New.git",
    liveDemoUrl: "",
    contribution: "My Contribution — To be updated"
  }
];

// @desc    Fetch all projects
// @route   GET /api/projects
const getProjects = async (req, res) => {
  try {
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      // Return fallback data if DB is not connected
      return res.json(fallbackProjects);
    }
    
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch single project
// @route   GET /api/projects/:id
const getProjectById = async (req, res) => {
  try {
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      const project = fallbackProjects.find(p => p._id === req.params.id);
      if(project) return res.json(project);
      return res.status(404).json({ message: 'Project not found' });
    }

    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getProjects, getProjectById };
