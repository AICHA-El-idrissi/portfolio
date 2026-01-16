import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Layout, ChevronDown, Menu, X, Download, Cpu, Wifi, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');

  const titles = ["Embedded Systems Engineer", "IoT Developer", "Hardware Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentTitle = titles[titleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        currentText += currentTitle[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInfo = {
    name: "Aicha El Idrissi",
    title: "Embedded Systems Engineering Student",
    bio: "I am an enthusiastic engineering student specializing in embedded systems, real‑time programming, and IoT development. Passionate about building efficient and innovative solutions with hardware and software integration.",
    email: "aicha.elidrissi04@email.com",
    github: "https://github.com/AICHA-El-idrissi",
    linkedin: "https://www.linkedin.com/in/aicha-el-idrissi-9a670232a",
    location: "Morocco",
    university: "Ensa - Fès"
  };

  const skills = [
    { name: "C ", icon: <Code className="w-6 h-6" />, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Embedded Systems", icon: <Database className="w-6 h-6" />, level: 80, color: "from-green-500 to-emerald-500" },
    { name: "Microcontrollers", icon: <Cpu className="w-6 h-6" />, level: 75, color: "from-purple-500 to-pink-500" },
    { name: "RTOS & Linux", icon: <Layout className="w-6 h-6" />, level: 70, color: "from-orange-500 to-red-500" },
    { name: "IoT & Sensors", icon: <Wifi className="w-6 h-6" />, level: 75, color: "from-indigo-500 to-purple-500" },
    { name: "Web Interfaces", icon: <Palette className="w-6 h-6" />, level: 65, color: "from-pink-500 to-rose-500" }
  ];

  const projects = [
    {
      title: "PID Control System",
      description: "Single-axis drone stabilization using Arduino, brushless motors, and ESCs with MPU6050 sensor fusion and real-time PID control.",
      tech: ["C", "Arduino", "PID", "Sensors"],
      image: "/images/PID_controller_img.jpg",
      github: "https://github.com/aicha-el-idrissi/robot-differential",
      demo: "",
      category: "Embedded"
    },
    {
      title: "MPU6050 Stabilization",
      description: "Stabilization system using MPU6050 IMU with complementary filtering and sensor fusion for real‑time orientation estimation.",
      tech: ["C++", "IMU", "Control", "Real‑Time"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      github: "https://github.com/aicha-el-idrissi/mpu6050-project",
      demo: "",
      category: "Embedded"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and contact information.",
      tech: ["React", "Tailwind", "Responsive"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "https://github.com/aicha-el-idrissi/portfolio",
      demo: "https://aicha-portfolio.netlify.app",
      category: "Web"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[0]}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-cyan-400 transition-colors relative ${activeSection === section ? 'text-cyan-400' : ''}`}
              >
                {section === 'home' ? 'Home' : section === 'about' ? 'About' : section === 'skills' ? 'Skills' : section === 'projects' ? 'Projects' : 'Contact'}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col p-6 gap-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left py-2 hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section === 'home' ? 'Home' : section === 'about' ? 'About' : section === 'skills' ? 'Skills' : section === 'projects' ? 'Projects' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center z-10 max-w-5xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-cyan-400">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-2xl md:text-4xl text-cyan-400 font-mono">
              {typedText}<span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex gap-6 justify-center mb-12 flex-wrap">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 rounded-full transition-all hover:scale-110 border border-blue-500/20">
              <Github className="w-6 h-6" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 rounded-full transition-all hover:scale-110 border border-blue-500/20">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
               className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 rounded-full transition-all hover:scale-110 border border-blue-500/20">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 border border-cyan-400/30 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-cyan-400/50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-cyan-400">Embedded Systems Enthusiast</h3>
              <p className="text-gray-300 leading-relaxed">
                As an engineering student specializing in embedded systems, I'm passionate about bridging the gap between hardware and software. My expertise lies in developing real-time systems, IoT solutions, and control algorithms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy working with microcontrollers, sensors, and creating efficient embedded solutions that solve real-world problems. My projects range from drone stabilization systems to IoT sensor networks.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-white/5 rounded-xl border border-blue-500/20">
                  <p className="text-cyan-400 font-semibold">Location</p>
                  <p className="text-gray-300">{personalInfo.location}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-blue-500/20">
                  <p className="text-cyan-400 font-semibold">Education</p>
                  <p className="text-gray-300">{personalInfo.university}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 border border-blue-500/20 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-right text-sm mt-2 text-cyan-400 font-semibold">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all border border-blue-500/20 group">
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Interested in collaborating or have a project in mind? Let's connect!
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`}
                 className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 rounded-2xl transition-all group border border-blue-500/20">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold text-cyan-400">{personalInfo.email}</p>
                </div>
              </a>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group border border-blue-500/20">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-cyan-400 font-semibold">@{personalInfo.github.split('/').pop()}</p>
                  </div>
                </a>
                
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group border border-blue-500/20">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-cyan-400 font-semibold">Connect</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-110 z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8 text-center text-gray-400 relative z-10">
        <p className="mb-2">© 2024 {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm text-cyan-400">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}