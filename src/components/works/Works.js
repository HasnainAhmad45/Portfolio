/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

import "./Works.css";

// Import your project images
import Portfolio from "../../assets/recentprojects/react-portfolio.png";
import Veritru from "../../assets/recentprojects/veritru.png";
import Lofo from "../../assets/recentprojects/lofo.png";
import Startup from "../../assets/recentprojects/startup.png";
import Lacalle from "../../assets/recentprojects/lacalle.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "4em",
    marginBottom: "auto",
    padding: theme.spacing(4, 2),
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: theme.spacing(2),
    color: "#2c3e50",
  },
  sectionSubtitle: {
    fontSize: "1.1rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  filterChip: {
    borderRadius: "6px",
    fontWeight: "500",
    transition: "all 0.2s ease",
    border: "1px solid #e0e0e0",
    "&.MuiChip-clickable:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  filterChipActive: {
    backgroundColor: "#575757",
    color: "white",
    "&:hover": {
      backgroundColor: "#575757",
    },
  },
  button: {
    margin: theme.spacing(0.5),
    borderRadius: "6px",
    fontWeight: "500",
    textTransform: "none",
    fontSize: "0.9rem",
    transition: "all 0.2s ease",
  },
  liveDemo: {
    backgroundColor: "#575757",
    color: "white",
    "&:hover": {
      backgroundColor: "#ec704c",
    },
  },
  github: {
    backgroundColor: "transparent",
    color: "#575757",
    border: "1px solid #e0e0e0",
    "&:hover": {
      backgroundColor: "#f5f5f5",
      borderColor: "#575757",
    },
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState("all");

  const projectCategories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "oop", label: "OOP Projects" },
    { key: "database", label: "Database Projects" },
    { key: "ai", label: "AI/ML Projects" },
  ];

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Blogging Platform",
      description: `A comprehensive full-stack blogging application featuring user authentication, CRUD operations for blog posts, image upload functionality with Cloudinary storage, and responsive Material-UI design. Built with React frontend, Express.js REST API backend, and MySQL database with proper file handling using Multer middleware.`,
      alter: "Blogging Platform",
      image: `${Portfolio}`,
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "MySQL",
        "Cloudinary",
        "Multer",
        "Material-UI",
        "JWT Authentication",
        "REST API",
        "Axios",
        "BCrypt",
      ],
      features: [
        "User registration and authentication",
        "Create, read, update, delete blog posts",
        "Image upload and management with Cloudinary",
        "Responsive Material-UI design",
        "RESTful API architecture",
        "File upload handling with Multer",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 2,
      title: "Portfolio",
      description: `A hybrid portfolio website featured by both traditional HTML/CSS/JavaScript implementation and a modern React version with Material-UI components. Includes an Express.js backend for contact forms and project management with responsive design and smooth animations.`,
      alter: "Portfolio",
      image: `${Portfolio}`,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Express.js",
        "Material-UI",
        "Node.js",
        "REST API",
      ],
      features: [
        "Dual implementation (HTML/CSS/JS + React)",
        "Material-UI components and theming",
        "Express.js backend API",
        "Contact form functionality",
        "Responsive mobile-first design",
        "Smooth CSS animations",
        "Project showcase with filtering",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Currency Converter",
      description: `A real-time currency conversion application that fetches live exchange rates from external APIs. Features a clean, intuitive interface with support for multiple currencies, historical data, and responsive design for seamless cross-device usage.`,
      alter: "Currency Converter",
      image: `${Portfolio}`,
      technologies: [
        "React",
        "JavaScript",
        "API Integration",
        "CSS3",
        "HTML5",
        "Exchange Rate API",
        "Responsive Design",
      ],
      features: [
        "Real-time exchange rates",
        "Support for 150+ currencies",
        "Live API data integration",
        "Responsive mobile design",
        "Quick conversion history",
        "Clean and intuitive UI",
        "Cross-browser compatibility",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
    },
    {
      id: 4,
      title: "Flappy Bird Game",
      description: `A JavaScript implementation of the classic Flappy Bird game using HTML5 Canvas. Features smooth character animation, collision detection, score tracking, and responsive controls with increasing difficulty levels.`,
      alter: "Flappy Bird Game",
      image: `${Portfolio}`,
      technologies: [
        "HTML5 Canvas",
        "JavaScript",
        "CSS3",
        "Game Development",
        "Collision Detection",
      ],
      features: [
        "HTML5 Canvas rendering",
        "Collision detection system",
        "Score tracking and high scores",
        "Responsive keyboard and touch controls",
        "Game state management",
      ],
      liveUrl: "https://flappybirdinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Flappy-Bird",
      category: "web",
    },
    {
      id: 5,
      title: "Whack a Mole Game",
      description: `An interactive Whack-a-Mole arcade game built with vanilla JavaScript. Features random mole appearances, timing mechanics, score system, and progressively challenging levels with visual feedback.`,
      alter: "Whack a Mole Game",
      image: `${Portfolio}`,
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "DOM Manipulation",
        "Event Handling",
      ],
      features: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Random mole generation algorithm",
        "Score tracking and timing system",
        "Responsive grid layout",
      ],
      liveUrl: "https://whackamoleinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Whack-a-Mole",
      category: "web",
    },

    {
      id: 6,
      title: "Tic Tac Toe Game",
      description: `A feature-rich Tic Tac Toe game with both player vs player. Includes game statistics, and sleek animations with win detection logic.`,
      alter: "Tic Tac Toe Game",
      image: `${Portfolio}`,
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      features: [
        "Player vs Player mode",
        "Win condition detection",
        "Game statistics tracking",
        "Smooth CSS animations",
        "Responsive grid design",
        "Game reset and replay functionality",
      ],
      liveUrl: "https://tictactoeinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Tic-Tac-Toe",
      category: "web",
    },
    {
      id: 7,
      title: "Doodler Jump Game",
      description: `A Doodle Jump clone built with HTML5 Canvas featuring character physics, platform generation, gravity simulation, and progressive score track. Includes obstacle mechanics.`,
      alter: "Doodler Jump Game",
      image: `${Portfolio}`,
      technologies: [
        "HTML5 Canvas",
        "JavaScript",
        "CSS3",
        "Physics Engine",
        "Game Animation",
      ],
      features: [
        "Character physics and gravity simulation",
        "Dynamic platform generation",
        "Infinite scrolling gameplay",
        "Power-up and obstacle system",
        "Smooth character animation",
      ],
      liveUrl: "https://doodlerjumpinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Doodler-Jump",
      category: "web",
    },
    {
      id: 8,
      title: "YouTube Clone",
      description: `A fully responsive YouTube interface clone with video playback, search functionality, and channel simulation. Features a modern UI with sidebar navigation, video grid layout, and mock video data with interactive elements.`,
      alter: "YouTube Clone",
      image: `${Portfolio}`,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "DOM Manipulation",
      ],
      features: [
        "YouTube-like UI/UX design",
        "Responsive video grid layout",
        "Search functionality",
        "Sidebar navigation",
        "Video player simulation",
        "Channel pages",
        "Mobile-responsive design",
      ],
      liveUrl: "https://ytcloneinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/YouTube-Clone",
      category: "web",
    },
    {
      id: 9,
      title: "Advanced Calculator",
      description: `A feature-rich calculator application with basic and scientific functions. Includes memory operations, keyboard support, and a sleek, responsive interface with error handling.`,
      alter: "Calculator App",
      image: `${Portfolio}`,
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Math Operations",
        "Event Handling",
      ],
      features: [
        "HTML5 Canvas",
        "JavaScript",
        "CSS3",
        "Basic arithmetic operations",
        "Error handling and validation",
        "Responsive design",
      ],
      liveUrl: "https://scientificcalculatorinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Scientific-Calculator",
      category: "web",
    },
    {
      id: 10,
      title: "Weather Forecast App",
      description: `A real-time weather application that fetches current conditions and forecasts from weather APIs. Features location detection, and detailed weather information with icons.`,
      alter: "Weather App",
      image: `${Portfolio}`,
      technologies: [
        "JavaScript",
        "API Integration",
        "HTML5",
        "CSS3",
        "Geolocation API",
      ],
      features: [
        "Real-time weather data",
        "Location-based weather",
        "City search functionality",
        "Weather icons and animations",
        "Responsive design",
        "Error handling for API failures",
      ],
      liveUrl: "https://weatherappinit.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Weather-App",
      category: "web",
    },
    {
      id: 11,
      title: "Social Media Handler (C++)",
      description: `An object-oriented social media management system built in C++ with comprehensive file handling. Implements user profiles, friend connections, post management, and data persistence using file operations with efficient memory management.`,
      alter: "Social Media Handler",
      image: `${Portfolio}`,
      technologies: [
        "C++",
        "Object-Oriented Programming",
        "File Handling",
        "Data Structures",
        "STL",
      ],
      features: [
        "User registration and authentication",
        "Friend request system",
        "Post creation and management",
        "Profile customization",
        "Data persistence with file I/O",
        "Search and filter users",
        "News feed generation",
        "Memory management and optimization",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/HasnainAhmad45/Social-Media-Handler",
      category: "oop",
    },
    {
      id: 13,
      title: "Hotel Management System",
      description: `A comprehensive desktop application for hotel operations management built with Python Tkinter. Features room booking, guest management with an intuitive graphical user interface.`,
      alter: "Hotel Management System",
      image: `${Portfolio}`,
      technologies: ["Python", "Tkinter", "MySQL", "GUI Development"],
      features: [
        "Room reservation and booking system",
        "Room status management",
        "Inventory and supplies tracking",
        "Database integration with Mysql",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "database",
    },
    {
      id: 14,
      title: "Car Showroom Management System",
      description: `A database-driven car showroom management system built with MySQL. Manages vehicle inventory, customer relationships, sales transactions, and supplier information with complex queries and reporting capabilities.`,
      alter: "Car Showroom System",
      image: `${Portfolio}`,
      technologies: [
        "MySQL",
        "Database Design",
        "SQL Queries",
        "Normalization",
      ],
      features: [
        "Vehicle inventory management",
        "Customer and sales tracking",
        "Supplier and purchase orders",
        "Sales and revenue reports",
        "Database normalization",
        "Complex SQL queries and joins",
        "Stored procedures and functions",
        "Data integrity and constraints",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/HasnainAhmad45/Car-Showroom-Management-System",
      category: "database",
    },
    {
      id: 32,
      title: "AI Chatbot",
      description: `Intelligent chatbot using natural language processing for customer service automation.`,
      alter: "AI Chatbot",
      image: `${Startup}`, // You can replace with actual image
      technologies: ["Python", "NLP", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#",
      category: "ai",
    },
  ]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="lg">
        <div className={classes.sectionHeader}>
          <h1 className={classes.sectionTitle}>
            <TextDecrypt text="PROJECTS" />
          </h1>
          <p className={classes.sectionSubtitle}>
            A collection of my academic, professional, and personal projects
          </p>
        </div>

        {/* Project Filters */}
        <div className={classes.filters}>
          {projectCategories.map((category) => (
            <Chip
              key={category.key}
              label={category.label}
              clickable
              className={`${classes.filterChip} ${
                activeFilter === category.key ? classes.filterChipActive : ""
              }`}
              onClick={() => setActiveFilter(category.key)}
            />
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image__wrapper">
                <img src={project.image} alt={project.alter} />
              </div>

              <div className="project-content__wrapper">
                <div className="project-category">
                  {
                    projectCategories.find(
                      (cat) => cat.key === project.category
                    )?.label
                  }
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <Button
                    className={`${classes.button} ${classes.liveDemo}`}
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    variant="contained"
                    size="small"
                  >
                    {project.category === "ai" ||
                    project.category === "database"
                      ? "View Demo"
                      : "Live Demo"}
                  </Button>
                  <Button
                    className={`${classes.button} ${classes.github}`}
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    variant="outlined"
                    size="small"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
