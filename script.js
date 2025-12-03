// Entrance Screen
const entranceScreen = document.getElementById('entranceScreen');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

// Set music volume to 30% (adjust this value: 0.0 = mute, 1.0 = full volume)
bgMusic.volume = 0.3;

// Click to enter functionality
entranceScreen.addEventListener('click', () => {
    // Hide entrance screen
    entranceScreen.classList.add('hidden');

    // Show main content
    mainContent.classList.add('visible');

    // Auto-play music
    bgMusic.play().catch(err => {
        console.log('Auto-play failed:', err);
        // Music will still be playable via the button
    });

    // Update music button state
    const musicBtn = document.getElementById('musicBtn');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    musicBtn.classList.add('playing');
    isPlaying = true;
});

// Typing effect
const typingTexts = [
    'MINIMALIST',
    'CREATIVE',
    'SLEEK',
    'MODERN'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// Cursor glow effect
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursorGlow.style.left = `${x - 200}px`;
    cursorGlow.style.top = `${y - 200}px`;
});

// Music player
const musicBtn = document.getElementById('musicBtn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        musicBtn.classList.remove('playing');
    } else {
        bgMusic.play().catch(err => {
            console.log('Audio play failed:', err);
            // Show alert if audio file is not found
            if (err.name === 'NotSupportedError' || err.name === 'NotAllowedError') {
                alert('Please add the "music.mp3" file to play music');
            }
        });
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.cursor = 'none';
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgGradient = document.querySelector('.bg-gradient');
    bgGradient.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// 3D Tilt Effect for Cards
class TiltEffect {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            max: options.max || 15,
            perspective: options.perspective || 1000,
            scale: options.scale || 1.05,
            speed: options.speed || 300,
            easing: options.easing || 'cubic-bezier(.03,.98,.52,.99)',
        };
        this.init();
    }

    init() {
        this.element.style.transformStyle = 'preserve-3d';
        this.element.style.transition = `transform ${this.options.speed}ms ${this.options.easing}`;

        this.element.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.element.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }

    onMouseEnter() {
        this.element.style.willChange = 'transform';
    }

    onMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = percentY * this.options.max;
        const rotateY = percentX * this.options.max;

        this.element.style.transform = `
            perspective(${this.options.perspective}px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(${this.options.scale}, ${this.options.scale}, ${this.options.scale})
        `;
    }

    onMouseLeave() {
        this.element.style.willChange = 'auto';
        this.element.style.transform = `
            perspective(${this.options.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
    }
}

// Initialize tilt effect on all cards
window.addEventListener('load', () => {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        new TiltEffect(card, {
            max: 10,
            perspective: 1000,
            scale: 1.03,
            speed: 400
        });
    });

    // Also add subtle tilt to social links
    const socialLink = document.querySelector('.social-link');
    if (socialLink) {
        new TiltEffect(socialLink, {
            max: 5,
            perspective: 1000,
            scale: 1.02,
            speed: 400
        });
    }

    // Add tilt to music button
    const musicButton = document.querySelector('.music-btn');
    if (musicButton) {
        new TiltEffect(musicButton, {
            max: 5,
            perspective: 1000,
            scale: 1.02,
            speed: 400
        });
    }
});
