document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need to animate in
    const revealItems = document.querySelectorAll('.reveal-item');
    
    // Add a slight delay to ensure smooth rendering before animation starts
    setTimeout(() => {
        revealItems.forEach(item => {
            item.classList.add('active');
        });
    }, 100);
});