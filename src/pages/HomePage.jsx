import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { personalInfo, skills, projects } from '../data/portfolio';

const HomePage = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const topSkills = [
    ...skills.frontend.slice(0, 3),
    ...skills.backend.slice(0, 3)
  ];

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span className="font-satoshi">{personalInfo.location}</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={0.4}>
                <h1 className="font-satoshi font-bold text-5xl lg:text-7xl leading-tight">
                  <span className="text-gray-900 dark:text-white">Hello, I'm </span>
                  <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={0.6}>
                <h2 className="font-satoshi text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
                  {personalInfo.title}
                </h2>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={0.8}>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-satoshi leading-relaxed max-w-2xl">
                  {personalInfo.tagline}
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={1.0}>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/projects" 
                    className="group bg-primary-600 hover:bg-primary-700 text-white font-satoshi px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-satoshi px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Me</span>
                  </Link>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={1.2}>
                <div className="flex items-center space-x-6">
                  <motion.a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-satoshi font-medium">Resume</span>
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Profile Image */}
            <AnimatedSection direction="right" delay={0.6} className="flex justify-center lg:justify-end">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 flex items-center justify-center shadow-2xl">
                  {/* Placeholder for profile image */}
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary-200 to-blue-200 dark:from-primary-800/50 dark:to-blue-800/50 flex items-center justify-center">
                    <svg 
                      className="w-32 h-32 lg:w-40 lg:h-40 text-primary-400 dark:text-primary-600" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14.25c-3.72 0-6.75-3.03-6.75-6.75S8.28.75 12 .75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75zm0-12c-2.89 0-5.25 2.36-5.25 5.25S9.11 12.75 12 12.75s5.25-2.36 5.25-5.25S14.89 2.25 12 2.25z"/>
                      <path d="M20.25 23.25H3.75c-.41 0-.75-.34-.75-.75 0-4.96 4.04-9 9-9s9 4.04 9 9c0 .41-.34.75-.75.75zm-15.75-1.5h15c-.35-3.71-3.48-6.75-7.5-6.75s-7.15 3.04-7.5 6.75z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ⚛️
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  🚀
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>
      
      {/* Skills Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-satoshi font-bold text-4xl mb-4 text-gray-900 dark:text-white">
              What I Do Best
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in building full-stack applications with modern technologies
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSkills.map((skill, index) => (
              <StaggerItem key={skill.name}>
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-satoshi font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-satoshi">
                    {skill.level}% proficiency
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection className="text-center mt-12" delay={0.8}>
            <Link 
              to="/about" 
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-satoshi font-medium transition-colors group"
            >
              <span>View All Skills</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-satoshi font-bold text-4xl mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {project.category === 'Full Stack' ? '🌐' : 
                       project.category === 'SaaS' ? '💼' : '🤖'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-satoshi font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-satoshi font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-satoshi">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-satoshi">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection className="text-center mt-12" delay={0.8}>
            <Link 
              to="/projects" 
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-satoshi px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
