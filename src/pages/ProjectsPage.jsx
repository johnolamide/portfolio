import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Search, Calendar, Tag } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { projects } from '../data/portfolio';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  const getProjectIcon = (category) => {
    const icons = {
      'Full Stack': '🌐',
      'SaaS': '💼',
      'AI/ML': '🤖',
      'FinTech': '💰',
      'Analytics': '📊',
      'Enterprise': '🏢',
      'Mobile': '📱',
      'CMS': '📝',
      'EdTech': '🎓',
      'Real Estate': '🏠'
    };
    return icons[category] || '💻';
  };
  
  const getStatusColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-satoshi font-bold text-5xl lg:text-6xl mb-6 text-gray-900 dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-satoshi leading-relaxed">
              A showcase of my work spanning various technologies and domains. Each project represents a unique challenge and learning opportunity.
            </p>
          </AnimatedSection>
          
          {/* Stats */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {projects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Total Projects</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {new Set(projects.flatMap(p => p.technologies)).size}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Technologies Used</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {projects.filter(p => p.status === 'Completed').length}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Completed</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Filters and Search */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-satoshi"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-satoshi font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-satoshi font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    No projects found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              ) : (
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <StaggerItem key={project.id}>
                      <motion.div 
                        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full"
                        whileHover={{ y: -10, scale: 1.02 }}
                        layout
                      >
                        {/* Project Image */}
                        <div className="h-56 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                          <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                            {getProjectIcon(project.category)}
                          </div>
                          
                          {/* Status Badge */}
                          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </div>
                          
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              ⭐ Featured
                            </div>
                          )}
                        </div>
                        
                        {/* Project Content */}
                        <div className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-satoshi font-medium">
                              {project.category}
                            </span>
                            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{project.year}</span>
                            </div>
                          </div>
                          
                          <h3 className="font-satoshi font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="mb-6">
                            <div className="flex items-center space-x-1 mb-2">
                              <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 font-satoshi">Technologies</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span 
                                  key={index} 
                                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-satoshi hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex space-x-3 mt-auto">
                            <motion.a 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-satoshi px-4 py-3 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              <span>Live Demo</span>
                            </motion.a>
                            <motion.a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-satoshi px-4 py-3 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              <span>Code</span>
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
