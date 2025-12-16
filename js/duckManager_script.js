// Floating ducks animation
function createFloatingDucks() {
    const container = document.getElementById('floating-ducks');
    const duckEmojis = ['🐤', '🐥'];
    
    for (let i = 0; i < 130; i++) {
        const duck = document.createElement('div');
        duck.className = 'duck-particle';
        duck.textContent = duckEmojis[Math.floor(Math.random() * duckEmojis.length)];
        duck.style.left = Math.random() * 100 + '%';
        duck.style.top = Math.random() * 100 + '%';
        duck.style.animationDelay = Math.random() * 5 + 's';
        duck.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(duck);
    }
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize
createFloatingDucks();
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);