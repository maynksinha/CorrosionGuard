export const initScrollAnimation = () => {
  const animateElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.85;
      
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      }
    });
  };
  
  // Run once on page load
  setTimeout(animateElements, 100);
  
  // Run on scroll
  window.addEventListener('scroll', animateElements);
  
  // Cleanup
  return () => {
    window.removeEventListener('scroll', animateElements);
  };
};

export const staggeredAnimation = (delay: number = 0.1) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay }
  };
};