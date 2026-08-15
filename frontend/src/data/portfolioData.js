export const portfolioData = {
  hero: {
    name: "Sivapalan Jeriel Salomsan",
    title: "IT Undergraduate",
    location: "Batticaloa, Sri Lanka",
    summary: "I am an enthusiastic undergraduate student studying BSc. (Hons) in Information Technology at the University of Kelaniya. I know basic programming and web technologies. I am competent in learning new IT skills and improving my practical knowledge. I am looking for an IT internship to gain real working experience and develop my career in IT.",
    photoUrl: "/src/assets/profile.jpg",
  },
  education: [
    {
      institution: "University of Kelaniya",
      degree: "BSc (Hons) in Information Technology",
      dates: "2025–2029",
      achievements: [],
    },
    {
      institution: "Informatics Institute of Technology",
      degree: "AI Foundation Certificate Course",
      dates: "2025–2026 (Currently reading)",
      achievements: [],
    }
  ],
  skills: {
    programming: ["C++", "Java", "Python", "JavaScript"],
    databases: ["MySQL", "MongoDB"],
    web: ["HTML", "CSS"],
    cloud: ["AWS"],
  },
  projects: [
    {
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
      demoUrl: "",
    },
    {
      title: "Salon Management System",
      description: "Developed a customer booking workflow with validation and exception handling, applied OOP and basic MVC architecture, implemented backend error handling using Spring Boot, and ensured reliable API integration.",
      technologies: ["Java", "MySQL", "Spring Boot"],
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop", // Gray placeholder representation
      githubUrl: "[YOUR_GITHUB_LINK]",
      demoUrl: "",
    }
  ],
  certifications: [
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2025",
      description: "",
    },
    {
      title: "AI Chatbot & Machine Learning",
      issuer: "DevTown",
      date: "2026",
      description: "",
    },
    {
      title: "AI Foundation Certificate Course",
      issuer: "Informatics Institute of Technology",
      date: "2025–2026 (Currently reading)",
      description: "",
    }
  ],
  contact: {
    email: "jsalomsan@gmail.com",
    phone: "+94 784422070",
    location: "Batticaloa, Sri Lanka",
    linkedin: "https://www.linkedin.com/in/salomsan-jeriel?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/salomsanjeriel",
    resumeUrl: "#", // Update with your actual CV file path inside src/assets/cv/ when ready
  },
};
