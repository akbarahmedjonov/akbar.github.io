import { createNavbar, initNavbar, initTheme } from './js/Navbar.js';
import { createHero, initHero } from './js/Hero.js';
import { createProfileCard, initProfileCard } from './js/ProfileCard.js';
import { createProjectGrid, initProjectGrid } from './js/ProjectGrid.js';
import { createContact, initContact } from './js/Contact.js';

function renderApp() {
    initTheme();
    const app = document.getElementById('app');
    
    if (!app) {
        console.error('App container not found');
        return;
    }
    
    const components = [
        createNavbar(),
        createHero(),
        createProfileCard(),
        createProjectGrid(),
        createContact()
    ];
    
    app.innerHTML = components.join('');
    
    initializeComponents();
}

function initializeComponents() {
    initNavbar();
    initHero();
    initProfileCard();
    initProjectGrid();
    initContact();
    
    initSmoothScroll();
    
    initScrollAnimations();
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    setTimeout(() => {
        document.querySelectorAll('section').forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', renderApp);
