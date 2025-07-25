import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-satoshi font-bold text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">John Olamide</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-satoshi">
            I'm a passionate developer focused on creating beautiful, functional, and user-centered digital experiences.
          </p>
          <div className="space-x-4">
            <Link 
              to="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-satoshi px-6 py-3 rounded-md transition duration-300 inline-block"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-satoshi px-6 py-3 rounded-md transition duration-300 inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            {/* Placeholder for profile image */}
            <svg 
              className="w-32 h-32" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 14.25c-3.72 0-6.75-3.03-6.75-6.75S8.28.75 12 .75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75zm0-12c-2.89 0-5.25 2.36-5.25 5.25S9.11 12.75 12 12.75s5.25-2.36 5.25-5.25S14.89 2.25 12 2.25z"/>
              <path d="M20.25 23.25H3.75c-.41 0-.75-.34-.75-.75 0-4.96 4.04-9 9-9s9 4.04 9 9c0 .41-.34.75-.75.75zm-15.75-1.5h15c-.35-3.71-3.48-6.75-7.5-6.75s-7.15 3.04-7.5 6.75z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mt-20 text-center">
        <h2 className="font-satoshi font-bold text-3xl mb-10 text-gray-900 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h3 className="font-satoshi font-medium text-lg text-gray-900 dark:text-white">
              Frontend Development
            </h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>
              </svg>
            </div>
            <h3 className="font-satoshi font-medium text-lg text-gray-900 dark:text-white">
              Backend Development
            </h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              </svg>
            </div>
            <h3 className="font-satoshi font-medium text-lg text-gray-900 dark:text-white">
              UI/UX Design
            </h3>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 dark:text-blue-400 mb-3">
              <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-4h9v2H5z"/>
              </svg>
            </div>
            <h3 className="font-satoshi font-medium text-lg text-gray-900 dark:text-white">
              Mobile Development
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
