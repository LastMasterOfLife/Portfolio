// Floating book/owl particles in hero
const container = document.getElementById('floating-books');
const emojis = ['📚', '🔖', '🦉', '✏️', '📖', '🗺️'];

for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.className = 'book-particle';
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = (Math.random() * 12) + 's';
    particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
    particle.style.fontSize = (Math.random() * 16 + 18) + 'px';
    container.appendChild(particle);
}

// Scroll fade-in animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
});

// Trigger on load for above-fold elements
document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
