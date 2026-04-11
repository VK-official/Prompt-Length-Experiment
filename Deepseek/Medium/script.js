(function() {
  "use strict";

  // 1. Ensure fade-in is applied (CSS already handles it)
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.setAttribute('data-loaded', 'true');
  }

  // 2. Smooth CTA interaction
  const cta = document.getElementById('main-cta');
  if (cta) {
    cta.addEventListener('click', function(e) {
      e.preventDefault(); // demo only
      this.style.transition = 'all 0.2s';
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      console.log('✨ Maison Cacao · Indulgence awaits.');
    });
  }

  // 3. Image fallback (already handled by inline onerror, but we log if needed)
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.addEventListener('load', () => {
      // Image loaded successfully
    });
    heroImg.addEventListener('error', () => {
      console.warn('Primary image failed, fallback applied.');
    });
  }

  // 4. Elegant console greeting
  console.log('%c🍫 Maison Cacao · Handcrafted luxury', 'font-family: serif; font-size: 16px; color: #6b4e3a;');
})();