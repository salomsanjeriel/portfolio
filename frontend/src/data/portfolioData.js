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
      url: "https://im.kln.ac.lk/",
      logo: "/src/assets/education/kelaniya.jpg",
      achievements: [
        "Organizing Committee (OC) Member for Leo Club 'Avurudu' Event"
      ],
    },
    {
      institution: "St. Michael's College, Batticaloa",
      degree: "G.C.E. Advanced Level",
      dates: "2021–2023",
      logo: "/src/assets/education/stmichaels.png",
      url: "https://smc.edu.lk/",
      achievements: [
        "Completed Advanced Level Studies"
      ],
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
      githubUrl: "https://github.com/salomsanjeriel/Beauty-salon-management-app.git",
      demoUrl: "",
    },
    {
      title: "AI Study Chatbot",
      description: "Developed an AI-powered study chatbot to assist students with learning materials, answering questions, and providing educational support.",
      technologies: ["Python", "AI", "Machine Learning"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop", // AI Chatbot placeholder
      githubUrl: "https://github.com/salomsanjeriel/Study-chatbot.git",
      demoUrl: "",
    }
  ],
  certifications: [
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2025",
      description: "",
      image: "/src/assets/certificates/webdevelopment.jpeg"
    },
    {
      title: "AI Chatbot & Machine Learning",
      issuer: "DevTown",
      date: "2026",
      description: "",
      images: [
        "/src/assets/certificates/devtown-1.jpeg",
        "/src/assets/certificates/devtown-2.jpeg",
        "/src/assets/certificates/devtown-3.jpeg"
      ]
    },
    {
      title: "ARTEMIA IDEATHON",
      issuer: "IEEE WIE Student Branch, University of Sri Jayewardenepura",
      date: "October 2025",
      description: "Participated in the Phase 1: Ideathon of Artemia 1.0 as part of team CraftX.",
      image: "/src/assets/certificates/artemia.jpeg",
    },
    {
      title: "Machine Learning Mastery",
      issuer: "DevTown & Partners (MSME, Google Developer Groups, Microsoft Student Chapter)",
      date: "June 2026",
      description: "Successfully completed 5-days Free Bootcamp on Machine Learning Mastery.",
      images: [
        "/src/assets/certificates/ml-mastery-1.jpg",
        "/src/assets/certificates/ml-mastery-2.jpg",
        "/src/assets/certificates/ml-mastery-3.jpg"
      ]
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
