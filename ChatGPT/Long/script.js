// ================= FADE-IN ANIMATION =================

// Select all elements that should animate
const fadeItems = document.querySelectorAll('.fade-item');

// Function to trigger staggered animation
window.addEventListener('load', () => {
    fadeItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 300); // Stagger delay (300ms)
    });
});