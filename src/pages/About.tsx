import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Zap, CheckCircle, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-steel-primary text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              About <span className="text-rust-primary">CorrosionGuard</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-light">
              We are dedicated to revolutionizing how industries detect, analyze, and prevent corrosion damage 
              through cutting-edge technology and expert analysis.
            </p>
          </motion.div>
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

      {/* Our Story Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">Our Story</h2>
              <p className="text-lg text-neutral-dark mb-6">
                CorrosionGuard was founded in 2020 by a team of materials scientists and AI specialists with a shared vision: 
                to make corrosion detection accessible, accurate, and actionable.
              </p>
              <p className="text-lg text-neutral-dark mb-6">
                After years of research and development, we created an advanced neural network that can identify different types 
                of corrosion from simple photographs, enabling industries to detect problems early and prevent costly damages.
              </p>
              <p className="text-lg text-neutral-dark">
                Today, we help clients across industries—from oil and gas to maritime, infrastructure, and manufacturing—protect 
                their assets and ensure safety through reliable corrosion detection.
              </p>
            </div>
            <div className="animate-on-scroll staggered-delay-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-rust-primary to-steel-primary opacity-30 blur-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Our team working" 
                  className="relative rounded-lg w-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-neutral-light p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <Award className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-steel-dark">Our Mission</h3>
              <p className="text-neutral-dark mb-6">
                To provide industries with accessible, accurate, and actionable corrosion detection technology that 
                prevents equipment failure, reduces maintenance costs, and improves safety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="text-rust-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-dark">Develop innovative corrosion detection technologies</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-rust-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-dark">Make expert-level analysis accessible to all industries</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-rust-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-dark">Provide actionable insights to prevent equipment failure</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-steel-primary p-8 rounded-lg shadow-md text-white animate-on-scroll staggered-delay-2">
              <div className="bg-white bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-light mb-6">
                To become the global standard for corrosion detection, creating a world where preventable 
                corrosion damage no longer threatens infrastructure, equipment, or human safety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="text-rust-light mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-light">Lead the industry in corrosion detection accuracy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-rust-light mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-light">Continually improve AI capabilities to detect new corrosion types</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-rust-light mt-1 mr-2 flex-shrink-0" />
                  <span className="text-neutral-light">Expand our solutions to serve every industry affected by corrosion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-heading">Our <span className="text-rust-primary">Core Values</span></h2>
            <p className="section-subheading">
              The principles that guide our work and define our approach to corrosion detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="card p-6 animate-on-scroll staggered-delay-1">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Innovation</h3>
              <p className="text-neutral-dark">
                We continuously push the boundaries of what's possible in corrosion detection, investing in R&D 
                to develop new technologies and improve existing ones.
              </p>
            </div>

            {/* Value 2 */}
            <div className="card p-6 animate-on-scroll staggered-delay-2">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Accuracy</h3>
              <p className="text-neutral-dark">
                We're committed to providing the most accurate corrosion analysis possible, refining our algorithms 
                and validating our results through rigorous testing.
              </p>
            </div>

            {/* Value 3 */}
            <div className="card p-6 animate-on-scroll staggered-delay-3">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Accessibility</h3>
              <p className="text-neutral-dark">
                We believe that advanced corrosion detection shouldn't be limited to those with specialized equipment 
                or expertise, so we make our technology accessible to all.
              </p>
            </div>

            {/* Value 4 */}
            <div className="card p-6 animate-on-scroll staggered-delay-1">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Reliability</h3>
              <p className="text-neutral-dark">
                Our clients rely on our analysis to make critical decisions, so we prioritize reliability 
                in every aspect of our service and technology.
              </p>
            </div>

            {/* Value 5 */}
            <div className="card p-6 animate-on-scroll staggered-delay-2">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Safety</h3>
              <p className="text-neutral-dark">
                We're driven by the knowledge that our work helps prevent accidents and protect lives by 
                identifying corrosion before it leads to catastrophic failures.
              </p>
            </div>

            {/* Value 6 */}
            <div className="card p-6 animate-on-scroll staggered-delay-3">
              <div className="bg-rust-primary bg-opacity-10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-rust-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-steel-dark">Customer Focus</h3>
              <p className="text-neutral-dark">
                We listen closely to our clients' needs and continuously improve our products and services 
                to provide the best possible corrosion detection solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-steel-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-rust-primary">95%</div>
              <p className="text-lg">Detection Accuracy</p>
            </div>
            <div className="animate-on-scroll staggered-delay-1">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-rust-primary">500+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="animate-on-scroll staggered-delay-2">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-rust-primary">30+</div>
              <p className="text-lg">Industry Partners</p>
            </div>
            <div className="animate-on-scroll staggered-delay-3">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-rust-primary">$2M+</div>
              <p className="text-lg">Client Savings</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;