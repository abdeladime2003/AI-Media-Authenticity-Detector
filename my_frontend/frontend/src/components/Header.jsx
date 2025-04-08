import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink, FiMail, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* AI Logo with neural network motif */}
          <motion.a 
            href="/" 
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative h-9 w-9 mr-3">
              <FaBrain className="h-full w-full text-purple-600" />
              <div className="absolute -inset-1 rounded-full bg-purple-100/60 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-purple-300/30 pointer-events-none" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              DeepFake Detector
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Contact with popup */}
            <div 
              className="relative"
              onMouseEnter={() => setShowContactPopup(true)}
              onMouseLeave={() => setShowContactPopup(false)}
            >
              <motion.a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 font-medium text-sm"
                whileHover={{ y: -1 }}
              >
                Contact
              </motion.a>
              
              {/* Contact Popup Bubble */}
              <AnimatePresence>
                {showContactPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50"
                  >
                    <div className="flex flex-col space-y-2">
                      <a 
                        href="mailto:aminehajjam45@gmail.com" 
                        className="flex items-center text-gray-700 hover:text-purple-600 text-sm p-2 rounded hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiMail className="mr-2" />
                        Email
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/elhajjam-mohammed-amine-339b03291/" 
                        className="flex items-center text-gray-700 hover:text-purple-600 text-sm p-2 rounded hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiLinkedin className="mr-2" />
                        LinkedIn
                      </a>
                      <a 
                        href="https://www.instagram.com/evolving.ai/" 
                        className="flex items-center text-gray-700 hover:text-purple-600 text-sm p-2 rounded hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiInstagram className="mr-2" />
                        Instagram
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all flex items-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Demo
              <FiExternalLink className="ml-1.5" />
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a
                href="#documentation"
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Documentation
                <FiExternalLink />
              </a>
              
              <div className="space-y-1">
                <div className="block px-4 py-2 text-gray-700 font-medium">
                  Contact
                </div>
                <a
                  href="mailto:aminehajjam45@gmail.com"
                  className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-50 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <FiMail className="mr-3" />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/elhajjam-mohammed-amine-339b03291/"
                  className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-50 text-sm"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="mr-3" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/evolving.ai/"
                  className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-50 text-sm"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram className="mr-3" />
                  Instagram
                </a>
              </div>

              <button
                className="w-full flex items-center justify-between px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Try Demo
                <FiExternalLink />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;