// Trigger entrance animations
function triggerAnimations() {
    document.getElementById('headline').classList.add('animate-in');
    document.getElementById('subheadline').classList.add('animate-in-delay-1');
    document.getElementById('ctas').classList.add('animate-in-delay-2');
    document.getElementById('social-proof').classList.add('animate-in-delay-2');
}

// Shop Now Button
function shopNow() {
    const btn = event.currentTarget;
    const original = btn.innerHTML;
    
    btn.innerHTML = `🍫 Adding to cart...`;
    
    setTimeout(() => {
        btn.innerHTML = `✅ Added!`;
        document.getElementById('cart-count').textContent = 
            parseInt(document.getElementById('cart-count').textContent) + 1;
        
        setTimeout(() => {
            btn.innerHTML = original;
        }, 1500);
    }, 800);
}

// Watch Video Modal
function watchVideo() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
            <div class="bg-[#2c211b] rounded-3xl max-w-3xl w-full mx-4 overflow-hidden">
                <div class="aspect-video bg-black flex items-center justify-center relative">
                    <div class="text-center text-white">
                        <div class="mx-auto w-20 h-20 bg-amber-400 text-[#2c211b] rounded-full flex items-center justify-center text-5xl mb-4">▶</div>
                        <p class="text-2xl">The Story of ChocoLuxe</p>
                    </div>
                    <button onclick="this.closest('.fixed').remove()" 
                            class="absolute top-6 right-6 text-white text-3xl">✕</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal.firstElementChild);
}

// Toggle Search
function toggleSearch() {
    alert("🔍 Search modal would open here in the full website.");
}

// Toggle Cart
function toggleCart() {
    alert("🛒 Your cart would slide in from the right.\n\nCurrently 4 delicious chocolates inside.");
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize everything
window.onload = function() {
    triggerAnimations();
    console.log('%c🍫 ChocoLuxe Hero Section loaded successfully!', 'color:#f59e0b; font-size:14px;');
};