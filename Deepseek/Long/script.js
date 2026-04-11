/**
 * Velvet Cocoa — Hero Section JavaScript
 * ------------------------------------------------------------------
 * The animations are primarily CSS‑driven (staggered fade‑in).
 * This script adds minor enhancements: a loaded class and optional
 * future interactivity (e.g., cart, search toggles).
 * 
 * No external libraries — pure vanilla ES6.
 */

(function() {
  'use strict';

  // Add a class to <body> once the page is fully loaded.
  // This can be used for extra polish (e.g., to trigger transitions).
  window.addEventListener('load', function onLoad() {
    document.body.classList.add('app-loaded');
    
    // Elegant console greeting (because luxury details matter)
    console.log('%c Velvet Cocoa — Artisan Luxury ', 
                'background: #D4AF37; color: #1F130E; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 20px;');
    console.log('✨ Staggered entrance complete. Ready to indulge.');
  });

  // Optional: Smooth scroll for anchor links (progressive enhancement)
  // For a premium feel, we intercept internal anchor links and scroll smoothly.
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Ignore if it's just "#" or empty
      if (href === "#" || href === "" || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update URL without jumping (optional)
        history.pushState(null, null, href);
      }
    });
  });

  // Micro interaction: Navbar glass effect intensifies on scroll (optional)
  // Not required, but adds a luxurious dynamic.
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navbar.style.background = 'rgba(20, 12, 8, 0.45)';
        navbar.style.backdropFilter = 'blur(16px) saturate(200%)';
      } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.backdropFilter = 'blur(12px) saturate(180%)';
      }
    });
  }

})();