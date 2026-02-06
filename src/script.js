// Mobile-aware Lenis configuration
const isMobile = window.innerWidth <= 768;

const lenis = new Lenis({
    duration: isMobile ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: isMobile, // Enable smooth scrolling on touch devices
    touchMultiplier: isMobile ? 1.5 : 2, // Adjust touch sensitivity
});

// Update Lenis on window resize
window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
        lenis.options.duration = newIsMobile ? 1.0 : 1.2;
        lenis.options.touchMultiplier = newIsMobile ? 1.5 : 2;
    }
});