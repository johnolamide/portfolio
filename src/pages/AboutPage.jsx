const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-satoshi font-bold text-4xl mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h1>
        
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            {/* Placeholder for profile image */}
            <svg 
              className="w-24 h-24" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 14.25c-3.72 0-6.75-3.03-6.75-6.75S8.28.75 12 .75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75zm0-12c-2.89 0-5.25 2.36-5.25 5.25S9.11 12.75 12 12.75s5.25-2.36 5.25-5.25S14.89 2.25 12 2.25z"/>
              <path d="M20.25 23.25H3.75c-.41 0-.75-.34-.75-.75 0-4.96 4.04-9 9-9s9 4.04 9 9c0 .41-.34.75-.75.75zm-15.75-1.5h15c-.35-3.71-3.48-6.75-7.5-6.75s-7.15 3.04-7.5 6.75z"/>
            </svg>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="font-satoshi text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hello! I'm John Olamide, a passionate developer with a love for creating elegant, efficient, and user-friendly applications. My journey in the world of programming began over 5 years ago, and I've been on an exciting learning adventure ever since.
          </p>
          
          <h2 className="font-satoshi font-bold text-2xl mt-10 mb-4 text-gray-900 dark:text-white">
            My Background
          </h2>
          <p className="font-satoshi text-lg text-gray-700 dark:text-gray-300 mb-6">
            I hold a degree in Computer Science and have worked with various technologies across the full stack development spectrum. My experience ranges from building responsive front-end interfaces to designing robust back-end systems and APIs.
          </p>
          
          <h2 className="font-satoshi font-bold text-2xl mt-10 mb-4 text-gray-900 dark:text-white">
            My Approach
          </h2>
          <p className="font-satoshi text-lg text-gray-700 dark:text-gray-300 mb-6">
            I believe in writing clean, maintainable code and following best practices. I'm passionate about continuous learning and staying up-to-date with the latest technologies and trends in the development world.
          </p>
          
          <h2 className="font-satoshi font-bold text-2xl mt-10 mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">JavaScript/TypeScript</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">React</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">Node.js</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">Express</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">MongoDB</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">SQL</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">HTML/CSS</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">TailwindCSS</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-center">
              <span className="font-satoshi font-medium text-gray-900 dark:text-white">Git</span>
            </div>
          </div>
          
          <h2 className="font-satoshi font-bold text-2xl mt-10 mb-4 text-gray-900 dark:text-white">
            When I'm Not Coding
          </h2>
          <p className="font-satoshi text-lg text-gray-700 dark:text-gray-300">
            Outside of development, I enjoy reading technical books, hiking, and playing chess. I'm also an avid learner who's constantly exploring new technologies and concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
