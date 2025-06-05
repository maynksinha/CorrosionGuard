import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-rust-primary" />
            <span className="ml-2 text-xl font-heading font-bold text-steel-dark">
              Corr<span className="text-rust-primary">Det</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-rust-primary' : isScrolled ? 'text-steel-dark hover:text-rust-primary' : 'text-steel-dark hover:text-rust-primary'}`
              }
            >
              Home
            </NavLink>
            {/* <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-rust-primary' : isScrolled ? 'text-steel-dark hover:text-rust-primary' : 'text-steel-dark hover:text-rust-primary'}`
              }
            >
              About Us
            </NavLink> */}
            <NavLink 
              to="/detection" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-rust-primary' : isScrolled ? 'text-steel-dark hover:text-rust-primary' : 'text-steel-dark hover:text-rust-primary'}`
              }
            >
              Detection
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${isActive ? 'text-rust-primary' : isScrolled ? 'text-steel-dark hover:text-rust-primary' : 'text-steel-dark hover:text-rust-primary'}`
              }
            >
              Our Team
            </NavLink>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-steel-dark focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t mt-2"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base font-medium py-2 ${isActive ? 'text-rust-primary' : 'text-steel-dark'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              {/* <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium py-2 ${isActive ? 'text-rust-primary' : 'text-steel-dark'}`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink> */}
              <NavLink 
                to="/detection" 
                className={({ isActive }) => 
                  `text-base font-medium py-2 ${isActive ? 'text-rust-primary' : 'text-steel-dark'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Detection
              </NavLink>
              <NavLink 
                to="/team" 
                className={({ isActive }) => 
                  `text-base font-medium py-2 ${isActive ? 'text-rust-primary' : 'text-steel-dark'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </NavLink>
             
              <button className="btn-primary self-start">
                Get Started
              </button>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;