// Header sticky functionality
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile menu functionality
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fixed the onClick event (was incorrectly written as onClick instead of onclick)
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Close mobile menu when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// Close mobile menu when clicking on nav links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const emailForm = document.querySelector('.latter form');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing! We will contact you soon.');
            emailInput.value = '';
        }
    });
}

// Add loading animation for course images
document.addEventListener('DOMContentLoaded', function() {
    const courseImages = document.querySelectorAll('.row img');
    
    courseImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.box, .row, .container-box');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});