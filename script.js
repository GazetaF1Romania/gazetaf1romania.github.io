// Scroll-triggered reveal for edition cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Stagger the animation based on position in the grid
            const card = entry.target;
            const cards = Array.from(card.parentElement.children);
            const index = cards.indexOf(card);
            const delay = (index % 4) * 80; // stagger per row

            setTimeout(() => {
                card.classList.add('visible');
            }, delay);

            observer.unobserve(card);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.edition-card').forEach(card => {
    observer.observe(card);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Header background on scroll
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.85)';
        header.style.boxShadow = 'none';
    }

    lastScroll = scrollY;
}, { passive: true });
