import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, FileBox, Camera, BarChart3, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-steel-dark via-steel-primary to-steel-dark text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: "url('https://i0.wp.com/www.theengineeringchoice.com/wp-content/uploads/2021/04/Corrosion.jpg?fit=1280%2C720&ssl=1')"

            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                Advanced <span className="text-rust-primary">Corrosion Detection</span> Using Machine Learning
              </h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-light max-w-xl">
                Protect your industrial assets with our AI-powered corrosion detection system. 
                Upload images and get instant analysis of corrosion conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/detection" className="btn-primary text-center flex items-center justify-center">
                  Try Detection
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-steel-dark text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-rust-primary rounded-lg blur-md opacity-75 animate-pulse-slow"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  {/* <img 
                    src="https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2023/08/Corrosion-Definition.jpg" 
                    alt="Corrosion example" 
                    className="w-full h-full rounded-lg"
                  /> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path 
              fill="#F0F4F8" 
              fillOpacity="1" 
              d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-heading">Our <span className="text-rust-primary">Features</span></h2>
            <p className="section-subheading">
              We provide cutting-edge solutions to detect and analyze corrosion in industrial equipment and structures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="card p-6 animate-on-scroll staggered-delay-1">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <Camera className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Image Analysis</h3>
              <p className="text-neutral-dark">
                Upload images of your equipment and get instant analysis of corrosion conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card p-6 animate-on-scroll staggered-delay-2">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <BarChart3 className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Data Reporting</h3>
              <p className="text-neutral-dark">
                Receive detailed reports with corrosion severity levels and recommended actions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card p-6 animate-on-scroll staggered-delay-3">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <FileBox className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Documentation</h3>
              <p className="text-neutral-dark">
                Maintain a history of all inspections and track corrosion progression over time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card p-6 animate-on-scroll staggered-delay-4">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <Users className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Expert Support</h3>
              <p className="text-neutral-dark">
                Get support from our team of corrosion experts for complex analysis and remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-steel-primary text-white">
        <div className="container-custom text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to protect your assets from corrosion?
            </h2>
            <p className="text-lg mb-8 text-neutral-light">
              Try our corrosion detection tool today and take the first step towards preventing costly damages.
            </p>
            <Link 
              to="/detection" 
              className="inline-block bg-white text-steel-dark hover:bg-rust-primary hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
            >
              Start Detection Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-heading">Why Choose <span className="text-rust-primary">Us?</span></h2>
            <p className="section-subheading">
              Our advanced technology provides accurate detection and analysis to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2023/08/Corrosion-Definition.jpg" 
                alt="Corrosion detection in action" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll staggered-delay-1">
                <div className="bg-rust-primary bg-opacity-10 p-2 rounded-full inline-flex flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-rust-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">Early Detection</h3>
                  <p className="text-neutral-dark">
                    Identify corrosion in its early stages before it causes significant damage, saving you time and money on repairs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-on-scroll staggered-delay-2">
                <div className="bg-rust-primary bg-opacity-10 p-2 rounded-full inline-flex flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-rust-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">Accurate Analysis</h3>
                  <p className="text-neutral-dark">
                    Our advanced AI algorithms provide highly accurate analysis of corrosion severity and type.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-on-scroll staggered-delay-3">
                <div className="bg-rust-primary bg-opacity-10 p-2 rounded-full inline-flex flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-rust-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">Cost-Effective</h3>
                  <p className="text-neutral-dark">
                    Reduce maintenance costs by focusing resources where they're most needed based on reliable data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-on-scroll staggered-delay-4">
                <div className="bg-rust-primary bg-opacity-10 p-2 rounded-full inline-flex flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-rust-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">User-Friendly</h3>
                  <p className="text-neutral-dark">
                    Simple interface that makes it easy to upload images and interpret results, no technical expertise required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;