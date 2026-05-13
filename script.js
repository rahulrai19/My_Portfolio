// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-toggle i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between list and x
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('ph-list', 'ph-x');
    } else {
        menuIcon.classList.replace('ph-x', 'ph-list');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.replace('ph-x', 'ph-list');
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add subtle parallax to background shapes
const shapes = document.querySelectorAll('.bg-shape');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xPos = (window.innerWidth / 2 - e.pageX * speed / 100);
        const yPos = (window.innerHeight / 2 - e.pageY * speed / 100);
        
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Profile 3D Tilt & Zoom Effect
const profileContainer = document.querySelector('.profile-container');

if (profileContainer) {
    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        // Apply 3D rotation and subtle zoom based on cursor position
        profileContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
        profileContainer.style.transition = 'transform 0.1s ease-out';
    });
    
    profileContainer.addEventListener('mouseleave', () => {
        // Reset transformation when mouse leaves, adding a bounce back effect
        profileContainer.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        profileContainer.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
}
