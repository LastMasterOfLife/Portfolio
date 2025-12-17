// Floating cards animation
const floatingCards = document.getElementById('floating-cards');
const emojis = ['🎴', '⭐', '✨', '🃏', '💎', '🔥', '⚡', '🌸'];

for (let i = 0; i < 15; i++) {
    const card = document.createElement('div');
    card.className = 'card-particle';
    card.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    card.style.left = Math.random() * 100 + '%';
    card.style.top = Math.random() * 100 + '%';
    card.style.animationDelay = Math.random() * 5 + 's';
    card.style.animationDuration = (8 + Math.random() * 6) + 's';
    floatingCards.appendChild(card);
}

// Fade in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
