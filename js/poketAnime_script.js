// Gyroscope effect for cards
const cards = document.querySelectorAll('.card-3d');

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
        const tiltX = e.beta / 3;
        const tiltY = e.gamma / 3;
        
        cards.forEach(card => {
            card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
    });
}

// Mouse follow effect for desktop
document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltX = (e.clientY - centerY) / 30;
    const tiltY = (e.clientX - centerX) / 30;
    
    cards.forEach((card, index) => {
        const delay = index * 0.1;
        card.style.transform = `rotateX(${-tiltX}deg) rotateY(${tiltY}deg) translateZ(20px)`;
    });
});

// Pack click animation
document.querySelectorAll('.pack').forEach(pack => {
    pack.addEventListener('click', function() {
        this.style.animation = 'packShake 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Add pack shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes packShake {
        0%, 100% { transform: scale(1.1) rotate(0deg); }
        25% { transform: scale(1.15) rotate(-5deg); }
        50% { transform: scale(1.2) rotate(5deg); }
        75% { transform: scale(1.15) rotate(-3deg); }
    }
`;
document.head.appendChild(style);

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



