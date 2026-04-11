document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements to animate
    const textElements = document.querySelectorAll('.reveal-text');
    const visualElements = document.querySelectorAll('.fade-in-up');

    // Function to apply styles with a stagger
    const animateHero = () => {
        // Animate text content
        textElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 * index); // 200ms delay between each line
        });

        // Animate images
        visualElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 600 + (index * 300)); // Images appear slightly after text
        });
    };

    // Run animation
    animateHero();
});