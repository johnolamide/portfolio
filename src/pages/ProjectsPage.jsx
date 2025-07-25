const ProjectsPage = () => {
  // Sample projects data - in a real app, this might come from an API or CMS
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include product listings, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
      imageUrl: "/placeholder.jpg", // Placeholder image path
      demoLink: "https://project-demo.com",
      codeLink: "https://github.com/johnolamide/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Implements user authentication and role-based access control.",
      technologies: ["React", "Firebase", "TailwindCSS", "React DnD"],
      imageUrl: "/placeholder.jpg", // Placeholder image path
      demoLink: "https://project-demo.com",
      codeLink: "https://github.com/johnolamide/taskmanager"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts based on location. Utilizes weather APIs and implements geolocation.",
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
      imageUrl: "/placeholder.jpg", // Placeholder image path
      demoLink: "https://project-demo.com",
      codeLink: "https://github.com/johnolamide/weather-dashboard"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A full-featured blog platform with a content management system, user authentication, and a responsive design. Supports Markdown content and image uploads.",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "NextAuth.js"],
      imageUrl: "/placeholder.jpg", // Placeholder image path
      demoLink: "https://project-demo.com",
      codeLink: "https://github.com/johnolamide/blog-platform"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-satoshi font-bold text-4xl mb-8 text-center text-gray-900 dark:text-white">
        My Projects
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 font-satoshi">
        Here are some of the projects I've worked on. Each project has presented unique challenges and learning opportunities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              {/* Placeholder for project image */}
              <svg 
                className="w-24 h-24 text-gray-500 dark:text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4z" />
                <path d="M9 10a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h2 className="font-satoshi font-bold text-2xl mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-satoshi">
                {project.description}
              </p>
              <div className="mb-6">
                <h3 className="font-satoshi font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
                  TECHNOLOGIES USED
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-satoshi text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-satoshi px-4 py-2 rounded-md transition duration-300"
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-satoshi px-4 py-2 rounded-md transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
