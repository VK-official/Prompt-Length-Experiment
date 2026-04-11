/**
 * Velvet Cocoa Interaction Script
 * Handles entrance animations and scroll-based effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Staggered Entrance Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Use a timeout to ensure the browser has painted before animating
    setTimeout(() => {
        fadeElements.forEach((element, index) => {
            // Apply a staggered delay for each element (Headline, then Subtext, then Button)
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 300); // 300ms delay between each item
        });
    }, 100);

    // 2. Navigation Background Logic
    // Though we use CSS glassmorphism, we can toggle a class on scroll for extra depth
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0'; // Contract on scroll
            navbar.style.borderBottom = '1px solid rgba(197, 160, 89, 0.4)';
        } else {
            navbar.style.padding = '20px 0'; // Expand at top
            navbar.style.borderBottom = '1px solid rgba(197, 160, 89, 0.2)';
        }
    });
});