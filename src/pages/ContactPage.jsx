import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Calendar, Clock } from 'lucide-react';
import AnimatedSection from '../components/animations/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import { personalInfo } from '../data/portfolio';

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
  
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Please fix the errors below.'
      });
      return;
    }
    
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate API call
    setTimeout(() => {
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
  
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="font-satoshi font-bold text-5xl lg:text-6xl mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-satoshi leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear from you.
            </p>
          </AnimatedSection>
          
          {/* Quick Contact Stats */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">24h</div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Response Time</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Reply Rate</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <User className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-satoshi">Happy Clients</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
                <h2 className="font-satoshi font-bold text-3xl mb-8 text-gray-900 dark:text-white">
                  Send Me a Message
                </h2>
                
                {formStatus.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 p-4 rounded-xl"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-satoshi font-medium">
                        Thank you! I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
                
                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 p-4 rounded-xl"
                  >
                    <p className="font-satoshi font-medium">
                      {formStatus.error}
                    </p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-satoshi ${
                            errors.name 
                              ? 'border-red-300 dark:border-red-600' 
                              : 'border-gray-200 dark:border-gray-600'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-satoshi ${
                            errors.email 
                              ? 'border-red-300 dark:border-red-600' 
                              : 'border-gray-200 dark:border-gray-600'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-satoshi"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-satoshi font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows="6"
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-satoshi resize-none ${
                        errors.message 
                          ? 'border-red-300 dark:border-red-600' 
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-satoshi px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
                      formStatus.isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:-translate-y-1'
                    }`}
                    whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="font-satoshi font-bold text-3xl mb-6 text-gray-900 dark:text-white">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you have a question, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.
                  </p>
                </div>
                
                <StaggerContainer className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <StaggerItem key={method.title}>
                        <motion.div 
                          className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div className={`p-3 rounded-xl ${method.color} group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-satoshi font-semibold text-lg text-gray-900 dark:text-white mb-1">
                              {method.title}
                            </h3>
                            {method.link ? (
                              <a 
                                href={method.link}
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-gray-600 dark:text-gray-400">
                                {method.value}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
                
                {/* Availability */}
                <AnimatedSection delay={0.8}>
                  <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="font-satoshi font-semibold text-lg text-gray-900 dark:text-white">
                        Currently Available
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      I'm currently available for new projects and collaborations. Let's discuss how we can work together!
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
