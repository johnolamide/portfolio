import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would handle form submission to a backend service
    // For this demo, we'll just simulate a submission
    
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate API call
    setTimeout(() => {
      // Check if all fields are filled to simulate validation
      if (!formData.name || !formData.email || !formData.message) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: 'Please fill in all required fields.'
        });
        return;
      }
      
      // Simulate successful submission
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false
        }));
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-satoshi font-bold text-4xl mb-8 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 font-satoshi">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        {formStatus.isSubmitted && (
          <div className="mb-8 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-700 dark:text-green-200 p-4 rounded">
            <p className="font-satoshi font-medium">
              Thank you for your message! I'll get back to you soon.
            </p>
          </div>
        )}
        
        {formStatus.error && (
          <div className="mb-8 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 rounded">
            <p className="font-satoshi font-medium">
              {formStatus.error}
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white font-satoshi"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white font-satoshi"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white font-satoshi"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white font-satoshi"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formStatus.isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-satoshi px-6 py-3 rounded-md transition duration-300 ${
                formStatus.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-satoshi font-bold text-lg text-gray-900 dark:text-white mb-1">
              Email
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-satoshi">
              contact@johnolamide.com
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3 3-3-3z" />
              </svg>
            </div>
            <h3 className="font-satoshi font-bold text-lg text-gray-900 dark:text-white mb-1">
              Social Media
            </h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a 
                href="https://github.com/johnolamide" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/johnolamide" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com/johnolamide" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm0 18a3 3 0 11-6 0 3 3 0 016 0zm12-12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-satoshi font-bold text-lg text-gray-900 dark:text-white mb-1">
              Location
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-satoshi">
              Remote / San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
