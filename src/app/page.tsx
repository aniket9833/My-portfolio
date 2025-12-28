"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Calendar,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "skills"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleViewResume = () => {
    // Option 3: Open Google Drive or online resume
    window.open(
      "https://drive.google.com/file/d/1kE2ib6vH8xwfsq5xQ_jL3G5GjQuiZyG7/view?usp=sharing",
      "_blank"
    );
  };

  const projects = [
    {
      title: "Crypto Tracker App",
      description:
        "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis features.",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Chart.js",
        "CoinGecko API",
      ],
      github: "https://github.com/aniket9833/CoinGecko",
      demo: "https://crypto-tracker-amber-iota.vercel.app/",
      featured: true,
    },

    {
      title: "Slack App",
      description:
        "Built a full-featured Slack integration enabling workspace creation, user onboarding, and channel management. Implemented real-time chat with authentication using Socket.IO, and added secure file sharing via AWS S3 with presigned URLs for scalable media handling.",
      techStack: ["JavaScript", "Node.js", "Express", "Stripe API", "JWT"],
      github: "https://github.com/aniket9833/Message-Slack-backend",
      demo: null,
      featured: true,
    },

    {
      title: "Web Scraper",
      description:
        "Developed a scalable Node.js/Express-based scraper to automate job data extraction using Playwright. Designed a MongoDB ETL pipeline with deduplication, normalization, and classification. Implemented a robust multi-layer scraping system with API/browser fallback, error handling, rate limiting, and logging for production-grade reliability.",
      techStack: [
        "JavaScript",
        "Node.js",
        "Playwright",
        "MongoDB",
        "Cron Jobs",
        "Express.js",
      ],
      github: "https://github.com/aniket9833/Web-Scrapper",
      demo: null,
      featured: true,
    },

    {
      title: "Social Media App",
      description:
        "Full-featured social media platform with user authentication, posts, comments, likes, and real-time messaging.",
      techStack: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      github: "https://github.com/aniket9833/social-media-app",
      featured: true,
    },
  ];

  const experiences = [
    {
      role: "Full Stack Engineer Intern",
      company: "MindMach Technologies",
      duration: "Apr 2025 - Present",
      location: "Remote",
      description: [
        "Contributed to core product development using Elixir, Phoenix, and Phoenix LiveView, enhancing backend functionality and improving interactive frontend components.",
        "Built a responsive waitlist page to capture user details for future engagement, integrating it with DynamoDB for scalable and reliable data storage.",
        "Collaborated within a cross-functional, agile team to deliver production-ready features with an emphasis on clean, maintainable code and optimized performance.",
        "Participated in code reviews, ensuring adherence to best practices and high code quality standards.",
        "Maintained a fast-paced development rhythm, rapidly prototyping and delivering features while adhering to software engineering best practices.",
      ],
      technologies: [
        "Elixir",
        "JavaScript",
        "TailwindCSS",
        "Phoenix",
        "AWS",
        "DynamoDB",
        "Docker",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "PhysicsWallah",
      duration: "Mar 2025 - May 2025",
      location: "Remote",
      description: [
        "Independently designed and developed a fully responsive social media web application using the MERN stack, aligning with project requirements.",
        "Built assigned features such as authentication, posting, and real-time interactions under guidance, ensuring timely and functional implementations.",
        "Managed the entire development lifecycle from UI design to backend APIs while maintaining clean, modular code and version control via Git.",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "AWS",
      ],
    },
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Elixir", "Java"],
    Frontend: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Phoenix LiveView",
      "Next.js",
      "Redux",
      "Zustand",
    ],
    Backend: [
      "Node.js",
      "Express",
      "Phoenix",
      "RESTful APIs",
      "Phoenix Framework",
    ],
    Databases: ["MongoDB", "DynamoDB", "MySQL", "Redis"],
    "Cloud & DevOps": ["AWS", "Git", "GitHub"],
    "Tools & Others": ["Linux", "Postman"],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Aniket Ingole
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "experience", "skills"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-blue-600 font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["home", "about", "projects", "experience", "skills"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize text-gray-600 hover:text-gray-900"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Aniket Ingole
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-6">
                Full Stack Developer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Passionate about building scalable applications and solving
                real-world problems through innovative technology solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleViewResume}
              >
                View Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:aniketingolenet@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-ingole/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/aniket9833"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            <div className="mt-16">
              <ChevronDown
                className="mx-auto animate-bounce text-gray-400"
                size={32}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Code size={80} className="text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer and Backend Engineer with
                a B.E. in Computer Science and Engineering (2023). I specialize
                in building scalable web applications and have a strong
                foundation in both frontend and backend technologies.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans the MERN stack, with additional proficiency
                in Elixir/Phoenix for backend development. I have hands-on
                experience with cloud technologies, particularly AWS, and I'm
                skilled in database design and optimization using SQL.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                During my internship experience, I've worked extensively with
                Elixir, Phoenix, and AWS, contributing to scalable backend
                solutions and gaining valuable insights into enterprise-level
                application development.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Badge variant="secondary" className="px-3 py-1">
                  MERN Stack
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Elixir/Phoenix
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  AWS
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  SQL
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Full Stack Development
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in
              full-stack development and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Github size={20} />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and the
              technologies I work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {category === "Programming Languages" && (
                    <Code className="mr-3 text-blue-600" size={24} />
                  )}
                  {category === "Frontend" && (
                    <Globe className="mr-3 text-blue-600" size={24} />
                  )}
                  {category === "Backend" && (
                    <Server className="mr-3 text-blue-600" size={24} />
                  )}
                  {category === "Databases" && (
                    <Database className="mr-3 text-blue-600" size={24} />
                  )}
                  {category === "Cloud & DevOps" && (
                    <Server className="mr-3 text-blue-600" size={24} />
                  )}
                  {category === "Tools & Others" && (
                    <Code className="mr-3 text-blue-600" size={24} />
                  )}
                  <h3 className="text-lg font-bold text-gray-900">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Aniket Ingole</h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer | Backend Engineer
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:aniket.ingole@example.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aniket-ingole"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/aniket9833"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Aniket Ingole. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
