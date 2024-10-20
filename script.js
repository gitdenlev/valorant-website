document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-content', {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: 'power2.out',
  });

  gsap.from('.section h2', {
    scrollTrigger: {
      trigger: '.section',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
  });
});
