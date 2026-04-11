// ====================== JAVASCRIPT FOR HERO SECTION ======================

// Mobile hamburger menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!hamburger || !mobileMenu) return;
    
    hamburger.addEventListener('click', () => {
        // Toggle active class
        const isOpen = mobileMenu.classList.toggle('active');
        
        // Animate hamburger lines into X
        const lines = hamburger.querySelectorAll('.hamburger-line');
        
        if (isOpen) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const lines = hamburger.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        });
    });
}

// Fake "Watch the Craft" modal (high-end feel)
function showCraftModal() {
    const modalHTML = `
        <div id="craft-modal" style="position:fixed;inset:0;background:rgba(26,18,12,0.92);z-index:99999;display:flex;align-items:center;justify-content:center;">
            <div style="max-width:720px;width:92%;background:#f8f1e3;border-radius:24px;overflow:hidden;box-shadow:0 30px 60px -10px rgb(26 18 12);">
                <div style="padding:2rem 2.5rem 1rem;text-align:center;">
                    <h2 style="font-family:'Playfair Display',serif;font-size:2.2rem;color:#1a1208;margin-bottom:0.5rem;">The Art of ÉCLAT</h2>
                    <p style="color:#6b5c48;">A 90-second journey into our atelier</p>
                </div>
                
                <!-- Placeholder video embed (replace with real video URL) -->
                <div style="position:relative;padding-top:56.25%;background:#1a1208;">
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#d4af77;font-size:3.5rem;opacity:0.9;">▶</div>
                    <p style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:#d4af77;text-align:center;font-weight:500;">
                        Video would play here in production<br>
                        <span style="font-size:0.9rem;opacity:0.7;">(High-quality cinematic chocolate-making footage)</span>
                    </p>
                </div>
                
                <div style="padding:1.5rem 2.5rem;display:flex;justify-content:space-between;align-items:center;">
                    <button onclick="closeCraftModal()" 
                            style="background:none;border:2px solid #1a1208;color:#1a1208;padding:12px 32px;border-radius:60px;font-weight:600;cursor:pointer;">
                        Close
                    </button>
                    <a href="#" style="color:#d4af77;text-decoration:none;font-weight:500;">Learn more about our process →</a>
                </div>
            </div>
        </div>
    `;
    
    // Append modal to body
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalHTML;
    document.body.appendChild(tempDiv.firstElementChild);
    
    // Close on background click
    const modal = document.getElementById('craft-modal');
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'craft-modal') closeCraftModal();
    });
}

function closeCraftModal() {
    const modal = document.getElementById('craft-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    }
}

// Initialize everything when the page loads
window.addEventListener('load', () => {
    initMobileMenu();
    console.log('%c✅ ÉCLAT Hero Section loaded with elegant fade-in animations and responsive design', 'color:#d4af77;font-family:monospace;font-size:13px');
    
    // Optional: subtle parallax on mouse move for the floating chocolates (luxury touch)
    const visual = document.querySelector('.hero-visual');
    if (visual) {
        visual.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = visual.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            const floats = document.querySelectorAll('.floating-image');
            floats.forEach((el, i) => {
                const intensity = (i + 1) * 12;
                el.style.transform = `translate(${x * intensity - intensity / 2}px, ${y * intensity - intensity / 2}px)`;
            });
        });
        
        // Reset on mouse leave
        visual.addEventListener('mouseleave', () => {
            const floats = document.querySelectorAll('.floating-image');
            floats.forEach(el => {
                el.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
                el.style.transform = '';
            });
        });
    }
    
    console.log('%c🍫 Hero ready for production – copy, paste & replace image URLs with your own high-resolution chocolate photography.', 'color:#d4af77;font-size:12px');
});