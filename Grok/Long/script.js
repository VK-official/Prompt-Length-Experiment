// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect - adds subtle shadow when scrolled
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(44, 31, 20, 0.92)';
            navbar.style.padding = '1.1rem 5%';
        } else {
            navbar.style.background = '';
            navbar.style.padding = '1.5rem 5%';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Optional: Keyboard accessibility for CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            // In production, this would navigate to shop section
            console.log('Navigating to shop...');
        }
    });
    
    // Preload hero image for smoother experience (optional)
    const heroImg = new Image();
    heroImg.src = 'https://picsum.photos/id/1015/2000/1200';
    
    console.log('%cVelvet Cocoa Hero Section Loaded Successfully ✨', 
                'color: #D4AF37; font-family: Playfair Display; font-size: 14px;');
});