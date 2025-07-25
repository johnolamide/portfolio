import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="font-satoshi font-bold text-8xl mb-6 text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="font-satoshi font-semibold text-3xl mb-8 text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-md mx-auto font-satoshi">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-satoshi px-6 py-3 rounded-md transition duration-300 inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
