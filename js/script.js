// Particle Animation
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-item')) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const width = progressBar.getAttribute('data-width');
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form Submit
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
    e.target.reset();
});

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Navigation to another page
document.getElementById("poketanime").addEventListener("click", () => {
  window.location.href = "../pages/PoketAnime.html";
});

