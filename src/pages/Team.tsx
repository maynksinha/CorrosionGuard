
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import leader from '../assests/leader.png';
import team1 from '../assests/team1.jpg';
import team2 from '../assests/team2.png'


const Team = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-steel-primary text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: "url('/api/placeholder/1600/900')" 
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
              Meet Our <span className="text-rust-primary">Team</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-light">
            Together, we explore innovative solutions at the intersection of materials science and artificial intelligence.
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

      {/* Leader */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-heading">Our <span className="text-rust-primary">Guide</span></h2>
            <p className="section-subheading">
              Meet the expert who leads our innovative corrosion detection technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Leader */}
            <div className="md:col-start-2 card overflow-hidden animate-on-scroll">
              <div className="relative">
                <img 
                  src={leader} 
                  alt="Dr. S.B Arya" 
                  className="w-full h-88 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Dr. S.B Arya</h3>
                  <p className="text-sm text-neutral-light">Associate Professor</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-dark mb-4">
                  Associate Professor at Metallurgical and Material Science Department with 15+ years of expertise in corrosion research.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-steel-primary hover:text-rust-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-steel-primary hover:text-rust-primary transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="section-heading">Engineering <span className="text-rust-primary">Team</span></h2>
            <p className="section-subheading">
              The talented engineering students working on our corrosion detection platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Engineering Student 1 */}
            <div className="card overflow-hidden animate-on-scroll">
              <img 
                src={team1} 
                alt="Engineering Student 1" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-steel-dark">Mayank Sinha</h3>
                <p className="text-sm text-neutral-dark mb-2">B.Tech Student</p>
                <p className="text-sm text-neutral-dark mb-3"></p>
                <div className="flex space-x-2">
                  <a href="#" className="text-steel-primary hover:text-rust-primary transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Engineering Student 2 */}
            <div className="card overflow-hidden animate-on-scroll staggered-delay-1">
              <img 
                src={team2}
                alt="Engineering Student 2" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-steel-dark">Jagriti Srivastava</h3>
                <p className="text-sm text-neutral-dark mb-2">B.Tech Student</p>
                <p className="text-sm text-neutral-dark mb-3"></p>
                <div className="flex space-x-2">
                  <a href="#" className="text-steel-primary hover:text-rust-primary transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

