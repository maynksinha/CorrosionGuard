import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-steel-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-rust-primary" />
              <span className="ml-2 text-xl font-heading font-bold">
                Corr<span className="text-rust-primary">Det</span>
              </span>
            </div>
            <p className="mb-6 text-neutral-medium">
              We provide cutting-edge corrosion detection solutions to help protect your assets and infrastructure.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll staggered-delay-1 ">
            <h4 className="text-lg font-heading font-bold mb-6 border-b border-steel-light pb-2 ">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-medium hover:text-rust-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-medium hover:text-rust-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/detection" className="text-neutral-medium hover:text-rust-primary transition-colors">Detection</Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-medium hover:text-rust-primary transition-colors">Our Team</Link>
              </li>
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div className="animate-on-scroll staggered-delay-2">
            <h4 className="text-lg font-heading font-bold mb-6 border-b border-steel-light pb-2">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  Corrosion Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  Asset Inspection
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  Preventive Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  Corrosion Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  Industrial Solutions
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div className="animate-on-scroll staggered-delay-3">
            <h4 className="text-lg font-heading font-bold mb-6 border-b border-steel-light pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-rust-primary mt-1 mr-2 flex-shrink-0" />
                <span className="text-neutral-medium">
                  123 Industrial Avenue, Suite 456<br />
                  Tech District, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-rust-primary mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-rust-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@corrosionguard.com" className="text-neutral-medium hover:text-rust-primary transition-colors">
                  info@corrosionguard.com
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-steel-light text-center text-neutral-medium text-sm">
          <p>© {new Date().getFullYear()} CorrosionGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;