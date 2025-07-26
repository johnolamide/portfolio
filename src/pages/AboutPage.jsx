import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Code, Award, Coffee } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { personalInfo, skills, experience, education } from '../data/portfolio';

const AboutPage = () => {
  const skillCategories = Object.entries(skills);
  
  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <AnimatedSection direction="left" className="flex justify-center lg:justify-start">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 flex items-center justify-center shadow-2xl">
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-200 to-blue-200 dark:from-primary-800/50 dark:to-blue-800/50 flex items-center justify-center">
                    <svg 
                      className="w-32 h-32 text-primary-400 dark:text-primary-600" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14.25c-3.72 0-6.75-3.03-6.75-6.75S8.28.75 12 .75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75zm0-12c-2.89 0-5.25 2.36-5.25 5.25S9.11 12.75 12 12.75s5.25-2.36 5.25-5.25S14.89 2.25 12 2.25z"/>
                      <path d="M20.25 23.25H3.75c-.41 0-.75-.34-.75-.75 0-4.96 4.04-9 9-9s9 4.04 9 9c0 .41-.34.75-.75.75zm-15.75-1.5h15c-.35-3.71-3.48-6.75-7.5-6.75s-7.15 3.04-7.5 6.75z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Floating stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
            
            {/* Content */}
            <div className="space-y-8">
              <AnimatedSection direction="right" delay={0.2}>
                <h1 className="font-satoshi font-bold text-5xl lg:text-6xl text-gray-900 dark:text-white">
                  About Me
                </h1>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.4}>
                <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-satoshi">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span className="font-satoshi">{personalInfo.title}</span>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.6}>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-satoshi leading-relaxed">
                  {personalInfo.bio}
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.8}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <Code className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <Coffee className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">∞</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Coffee Cups</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-satoshi font-bold text-4xl mb-4 text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here's a comprehensive overview of my technical expertise and proficiency levels
            </p>
          </AnimatedSection>
          
          <div className="space-y-16">
            {skillCategories.map(([category, skillList], categoryIndex) => (
              <AnimatedSection key={category} delay={categoryIndex * 0.2}>
                <div className="mb-8">
                  <h3 className="font-satoshi font-bold text-2xl capitalize text-gray-900 dark:text-white mb-2">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
                </div>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillList.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <motion.div 
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <h4 className="font-satoshi font-semibold text-lg text-gray-900 dark:text-white">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-satoshi font-bold text-4xl mb-4 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My journey through various roles and companies
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="space-y-8">
            {experience.map((exp) => (
              <StaggerItem key={exp.id}>
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="font-satoshi font-bold text-2xl text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                        <span className="font-satoshi font-medium">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mt-4 lg:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-satoshi font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-satoshi font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-satoshi font-bold text-4xl mb-4 text-gray-900 dark:text-white">
              Education
            </h2>
          </AnimatedSection>
          
          <StaggerContainer className="max-w-4xl mx-auto">
            {education.map((edu) => (
              <StaggerItem key={edu.id}>
                <motion.div 
                  className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <h3 className="font-satoshi font-bold text-2xl text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-6">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </span>
                      <span>•</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {edu.relevant.map((course) => (
                        <span 
                          key={course} 
                          className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-satoshi"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
