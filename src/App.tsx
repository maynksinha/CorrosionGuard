import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Detection from './pages/Detection';
import Team from './pages/Team';
import ScrollToTop from './components/ScrollToTop';
import { initScrollAnimation } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();
    
    // Update title
    document.title = 'CorrosionGuard - Advanced Corrosion Detection';
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="detection" element={<Detection />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;