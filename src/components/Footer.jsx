import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-lg bg-primary-600">
                  <span className="text-xl font-bold">{'</>'}</span>
                </div>
                <span className="font-satoshi text-xl font-bold">
                  QKIU.tech
                </span>
              </div>
              <p className="text-gray-400 font-satoshi leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-satoshi font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 font-satoshi inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-satoshi font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-satoshi">{personalInfo.location}</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-400 transition-colors duration-200 font-satoshi block"
                >
                  {personalInfo.email}
                </a>
                <p className="font-satoshi text-sm">
                  Available for freelance work
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 font-satoshi mb-4 md:mb-0">
            <span>&copy; {currentYear} {personalInfo.name}. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and lots of coffee</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
