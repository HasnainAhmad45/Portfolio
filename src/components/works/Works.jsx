import React, { useState } from "react";
import { Container, Button, Chip } from "@mui/material";
import { styled } from '@mui/material/styles';
import { TextDecrypt } from "../content/TextDecrypt";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Works.css";
import blog from '../../assets/recentprojects/blog.png';
import flappy from '../../assets/recentprojects/flappy.png';
import mole from '../../assets/recentprojects/mole.png';
import tic from '../../assets/recentprojects/tic.png';
import doodler from '../../assets/recentprojects/doodler.png';
import yt from '../../assets/recentprojects/yt.png';
import calculator from '../../assets/recentprojects/cal.png';
import weather from '../../assets/recentprojects/weather.png';
import cc from '../../assets/recentprojects/cc.png';
import portfolio from '../../assets/recentprojects/port.png';
import general from '../../assets/recentprojects/general.png';
import cpp from '../../assets/recentprojects/cpp.png';
import cms from '../../assets/recentprojects/cms.png';
import hms from '../../assets/recentprojects/hms.png';
import mic from '../../assets/recentprojects/mic.png';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const MainSection = styled(Container)(({ theme }) => ({
  maxWidth: '100vw',
  fontFamily: '"Roboto Mono", monospace',
  marginTop: '1em',
  marginBottom: 'auto',
  padding: theme.spacing(4, 2),
}));
const SectionHeader = styled('div')({
  textAlign: 'center',
  fontFamily: '"Roboto Mono", monospace',
});
const SectionTitle = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(5),
  color: '#2c3e50',
  fontFamily: '"Roboto Mono", monospace',

}));
const SectionSubtitle = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#666',
  maxWidth: 600,
  margin: '0 auto',
  marginBottom: theme.spacing(5),
  fontFamily: '"Roboto Mono", monospace',
}));

const Filters = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  fontFamily: '"Roboto Mono", monospace',
}));
const ButtonStyled = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
}));
const LiveDemo = styled(ButtonStyled)(({ theme }) => ({
  backgroundColor: '#575757',
  color: 'white',
  '&:hover': { backgroundColor: '#ec704c' },
  fontFamily: '"Roboto Mono", monospace',
}));
const GithubButton = styled(ButtonStyled)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#575757',
  border: '1px solid #e0e0e0',
  '&:hover': { backgroundColor: '#f5f5f5', borderColor: '#575757' },
  fontFamily: '"Roboto Mono", monospace',
}));

export const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // theme-aware styles for grid items
  const cardDarkBg = alpha(theme.palette.background.paper, 0.85) || '#22272e';
  const cardLightBg = '#fbfbfd';
  const projectCardStyle = {
    background: isDark ? cardDarkBg : cardLightBg,
    color: isDark ? alpha(theme.palette.text.primary, 0.88) : '#23272e',
    border: `1px solid ${isDark ? alpha(theme.palette.divider, 0.12) : '#e0e0e0'}`,
    boxShadow: isDark
      ? '0 2px 10px rgba(20,20,20,0.32)'
      : '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"Roboto Mono", monospace',
    height: '100%',
  };
  const projectTitleStyle = {
    color: isDark ? alpha(theme.palette.text.primary, 0.96) : '#1b222a',
  };
  const projectSubtitleStyle = {
    color: isDark ? alpha(theme.palette.text.secondary, 0.85) : '#666',
  };
  const techTagStyle = {
    background: isDark ? '#273043' : '#f4f5f7',
    color: isDark ? alpha('#fff', 0.92) : '#575757',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.13)' : '#e9ecef'}`,
    fontWeight: 500,
    borderRadius: 4,
    padding: '4px 12px',
    fontSize: '0.8rem',
    display: 'inline-block',
    transition: 'background 0.3s, color 0.3s',
  };

  const projectCategories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "oop", label: "OOP Projects" },
    { key: "database", label: "Database Projects" },
    { key: "ai", label: "AI/ML Projects" },
    { key: "web-scraping", label: "Web Scraping" },
  ];

  const [projects] = useState([
    {
      id: 1,
      title: "Modern Blogging Platform",
      description: `A comprehensive full-stack blogging application featuring user authentication, CRUD operations for blog posts, image upload functionality with Cloudinary storage, and responsive Material-UI design. Built with React frontend, Express.js REST API backend, and MySQL database with proper file handling using Multer middleware.`,
      alter: "Blogging Platform",
      image: `${blog}`,
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
      liveUrl: "",
      githubUrl: "https://github.com/HasnainAhmad45/Blogging-Website",
      category: "web",
    },
    {
      id: 2,
      title: "Portfolio",
      description: `A hybrid portfolio website featured by both traditional HTML/CSS/JavaScript implementation and a modern React version with Material-UI components. Includes an Express.js backend for contact forms and project management with responsive design and smooth animations.`,
      alter: "Portfolio",
      image: `${portfolio}`,
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
      liveUrl: "https://portfolioini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Portfolio",
      category: "web",
    },
    {
      id: 3,
      title: "Currency Converter",
      description: `A real-time currency conversion application that fetches live exchange rates from external APIs. Features a clean, intuitive interface with support for multiple currencies, historical data, and responsive design for seamless cross-device usage.`,
      alter: "Currency Converter",
      image: `${cc}`,
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
      liveUrl: "https://currencyconverterini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/CurrencyConverter",
      category: "web",
    },
    {
      id: 4,
      title: "Flappy Bird Game",
      description: `A JavaScript implementation of the classic Flappy Bird game using HTML5 Canvas. Features smooth character animation, collision detection, score tracking, and responsive controls with increasing difficulty levels.`,
      alter: "Flappy Bird Game",
      image: `${flappy}`,
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
      liveUrl: "https://flappybirdini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Flappy-Bird",
      category: "web",
    },
    {
      id: 5,
      title: "Whack a Mole Game",
      description: `An interactive Whack-a-Mole arcade game built with vanilla JavaScript. Features random mole appearances, timing mechanics, score system, and progressively challenging levels with visual feedback.`,
      alter: "Whack a Mole Game",
      image: `${mole}`,
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
      liveUrl: "https://whackamoleini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Whack-a-Mole",
      category: "web",
    },

    {
      id: 6,
      title: "Tic Tac Toe Game",
      description: `A feature-rich Tic Tac Toe game with both player vs player. Includes game statistics, and sleek animations with win detection logic.`,
      alter: "Tic Tac Toe Game",
      image: `${tic}`,
      technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      features: [
        "Player vs Player mode",
        "Win condition detection",
        "Game statistics tracking",
        "Smooth CSS animations",
        "Responsive grid design",
        "Game reset and replay functionality",
      ],
      liveUrl: "https://tictactoeini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Tic-Tac-Toe",
      category: "web",
    },
    {
      id: 7,
      title: "Doodler Jump Game",
      description: `A Doodle Jump clone built with HTML5 Canvas featuring character physics, platform generation, gravity simulation, and progressive score track. Includes obstacle mechanics.`,
      alter: "Doodler Jump Game",
      image: `${doodler}`,
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
      liveUrl: "https://doodlerjumpini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Doodler-Jump",
      category: "web",
    },
    {
      id: 8,
      title: "YouTube Clone",
      description: `A fully responsive YouTube interface clone with video playback, search functionality, and channel simulation. Features a modern UI with sidebar navigation, video grid layout, and mock video data with interactive elements.`,
      alter: "YouTube Clone",
      image: `${yt}`,
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
      liveUrl: "https://youtubecloneini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/YouTube-Clone",
      category: "web",
    },
    {
      id: 9,
      title: "Advanced Calculator",
      description: `A feature-rich calculator application with basic and scientific functions. Includes memory operations, keyboard support, and a sleek, responsive interface with error handling.`,
      alter: "Calculator App",
      image: `${calculator}`,
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
      liveUrl: "https://scientificcalculatorini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Scientific-Calculator",
      category: "web",
    },
    {
      id: 10,
      title: "Weather Forecast App",
      description: `A real-time weather application that fetches current conditions and forecasts from weather APIs. Features location detection, and detailed weather information with icons.`,
      alter: "Weather App",
      image: `${weather}`,
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
      liveUrl: "https://weatherappini.netlify.app/",
      githubUrl: "https://github.com/HasnainAhmad45/Weather-App",
      category: "web",
    },
    {
      id: 11,
      title: "Social Media Handler (C++)",
      description: `An object-oriented social media management system built in C++ with comprehensive file handling. Implements user profiles, friend connections, post management, and data persistence using file operations with efficient memory management.`,
      alter: "Social Media Handler",
      image: `${cpp}`,
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
      liveUrl: "https://projectvideosini.netlify.app/projects/cpp",
      githubUrl: "https://github.com/HasnainAhmad45/Social-Media-Handler",
      category: "oop",
    },
    {
      id: 12,
      title: "Hotel Management System",
      description: `A comprehensive desktop application for hotel operations management built with Python Tkinter. Features room booking, guest management with an intuitive graphical user interface.`,
      alter: "Hotel Management System",
      image: `${hms}`,
      technologies: ["Python", "Tkinter", "MySQL", "GUI Development"],
      features: [
        "Room reservation and booking system",
        "Room status management",
        "Inventory and supplies tracking",
        "Database integration with Mysql",
      ],
      liveUrl: "https://projectvideosini.netlify.app/projects/hms",
      githubUrl: "https://github.com/HasnainAhmad45/Hotel-Management-System",
      category: "database",
    },
    {
      id: 13,
      title: "Car Showroom Management System",
      description: `A database-driven car showroom management system built with MySQL. Manages vehicle inventory, customer relationships, sales transactions, and supplier information with complex queries and reporting capabilities.`,
      alter: "Car Showroom System",
      image: `${cms}`,
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
      liveUrl: "https://projectvideosini.netlify.app/projects/cms",
      githubUrl: "https://github.com/HasnainAhmad45/Car-Showroom-Management-System",
      category: "database",
    },
    {
      id: 14,
      title: "Made in China Scraper",
      description: `A web scraper that extracts product listings, prices, and supplier information from the Made-in-China website for data analysis and lead generation.`,
      alter: "Made in China Scraper",
      image: `${mic}`,
      technologies: ["Python", "BeautifulSoup", "Selenium", "MySQL"],
      liveUrl: "https://projectvideosini.netlify.app/projects/mic",
      githubUrl: "https://github.com/HasnainAhmad45/Made-in-China-Scraper",
      category: "web-scraping",
    },
    {
      id: 15,
      title: "AI Chatbot",
      description: `Intelligent chatbot using natural language processing for customer service automation.`,
      alter: "AI Chatbot",
      image: `${general}`,
      technologies: ["Python", "NLP", "Machine Learning"],
      liveUrl: "",
      githubUrl: "",
      category: "ai",
    },
  ]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works">
      <MainSection component="main" maxWidth="lg">
        <SectionHeader>
          <SectionTitle>{<TextDecrypt text="PROJECTS" />}</SectionTitle>
          <SectionSubtitle sx={projectSubtitleStyle}>
            A collection of my academic, professional, and personal projects
          </SectionSubtitle>
        </SectionHeader>
        <Filters>
          {projectCategories.map((category) => (
            <Chip
              key={category.key}
              label={category.label}
              clickable
              sx={{
                borderRadius: '6px',
                fontWeight: 500,
                border: `1px solid ${isDark ? theme.palette.divider : '#e0e0e0'}`,
                backgroundColor:
                  activeFilter === category.key
                    ? (isDark ? theme.palette.primary.main : '#575757')
                    : 'inherit',
                color:
                  activeFilter === category.key
                    ? (isDark ? '#fff' : 'white')
                    : (isDark ? theme.palette.text.primary : 'inherit'),
                '&:hover': {
                  backgroundColor:
                    activeFilter === category.key
                      ? (isDark ? theme.palette.primary.dark : '#575757')
                      : (isDark ? theme.palette.action.hover : '#f5f5f5'),
                },
                transition: 'all 0.2s ease',
              }}
              onClick={() => setActiveFilter(category.key)}
            />
          ))}
        </Filters>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id} style={projectCardStyle}>
              <div className="project-image__wrapper">
                <img src={project.image} alt={project.alter} />
              </div>
              <div className="project-content__wrapper">
                <div className="project-category" style={{ color: theme.palette.primary.main }}>
                  {projectCategories.find((cat) => cat.key === project.category)?.label}
                </div>
                <h3 className="project-title" style={projectTitleStyle}>{project.title}</h3>
                <p className="project-description" style={projectSubtitleStyle}>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={techTagStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <LiveDemo
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    variant="contained"
                    size="small"
                  >
                    {project.category === 'ai' || project.category === 'database' || project.category === 'web-scraping' || project.category === 'oop'
                      ? 'View Demo'
                      : 'Live Demo'}
                  </LiveDemo>
                  <GithubButton
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    variant="outlined"
                    size="small"
                  >
                    GitHub
                  </GithubButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainSection>
    </section>
  );
};
