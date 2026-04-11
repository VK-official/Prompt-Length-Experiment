(function() {
  "use strict";

  // 1. Add interactive polish and accessibility awareness
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.setAttribute('data-loaded', 'true');
  }

  // 2. Respect prefers-reduced-motion (already handled in CSS, but ensure)
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    const floating = document.querySelector('.floating-accent');
    if (floating) {
      floating.style.animation = 'none';
      floating.style.transform = 'none';
    }
    // Force opacity for all animated elements
    document.querySelectorAll('.hero-content, .hero-image, .hero-cta, .image-meta, .hero-tagline, .hero-description, .hero-content h1')
      .forEach(el => el.style.opacity = '1');
  }

  // 3. Image load class (cosmetic)
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add('img-loaded');
    } else {
      heroImg.addEventListener('load', () => heroImg.classList.add('img-loaded'));
    }
  }

  // 4. Add a "ready" class after a tiny delay (just for demonstration)
  setTimeout(() => {
    if (heroSection) {
      heroSection.classList.add('js-ready');
    }
    console.log('🍫 Velour Chocolates — Hero section ready.');
  }, 100);

  // 5. Optional subtle hover effect (already in CSS, but here for demonstration)
  const imageWrapper = document.querySelector('.image-wrapper');
  if (imageWrapper) {
    imageWrapper.addEventListener('mouseenter', () => {
      // nothing needed, CSS handles it
    });
  }

})();