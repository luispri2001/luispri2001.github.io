/**
 * Visual Artist Portfolio - Main JavaScript
 * Handles all interactive functionality
 */

// ============================================
// Gallery Data
// ============================================
const galleryData = [
    {
        id: 1,
        title: "Luz Eterna",
        category: "pintura",
        image: "images/gallery/obra-01.jpg",
        description: "Óleo sobre lienzo - 120x80cm"
    },
    {
        id: 2,
        title: "Formas Abstractas III",
        category: "escultura",
        image: "images/gallery/obra-02.jpg",
        description: "Bronce y mármol - 45x30x25cm"
    },
    {
        id: 3,
        title: "Atardecer en Barcelona",
        category: "fotografia",
        image: "images/gallery/obra-03.jpg",
        description: "Fotografía digital - 50x70cm"
    },
    {
        id: 4,
        title: "Sueños Digitales",
        category: "digital",
        image: "images/gallery/obra-04.jpg",
        description: "Arte digital - 3840x2160px"
    },
    {
        id: 5,
        title: "Rojo Passion",
        category: "pintura",
        image: "images/gallery/obra-05.jpg",
        description: "Acrílico sobre lienzo - 100x100cm"
    },
    {
        id: 6,
        title: "Equilibrio",
        category: "escultura",
        image: "images/gallery/obra-06.jpg",
        description: "Acero inoxidable - 60x40x40cm"
    },
    {
        id: 7,
        title: "Urban Life",
        category: "fotografia",
        image: "images/gallery/obra-07.jpg",
        description: "Fotografía analógica - 40x60cm"
    },
    {
        id: 8,
        title: "Nebulosa",
        category: "digital",
        image: "images/gallery/obra-08.jpg",
        description: "Arte digital generado por IA - 4096x4096px"
    },
    {
        id: 9,
        title: "Azul Profundo",
        category: "pintura",
        image: "images/gallery/obra-09.jpg",
        description: "Acuarela sobre papel - 56x76cm"
    },
    {
        id: 10,
        title: "Morfología",
        category: "escultura",
        image: "images/gallery/obra-10.jpg",
        description: "Resina y vidrio - 35x35x50cm"
    },
    {
        id: 11,
        title: "Calles de Madrid",
        category: "fotografia",
        image: "images/gallery/obra-11.jpg",
        description: "Fotografía digital - 60x40cm"
    },
    {
        id: 12,
        title: "Fractales",
        category: "digital",
        image: "images/gallery/obra-12.jpg",
        description: "Arte algorítmico - 1920x1080px"
    }
];

// ============================================
// DOM Elements
// ============================================
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryEmpty = document.getElementById('gallery-empty');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

let currentFilter = 'todos';
let currentLightboxIndex = 0;
let filteredGallery = [...galleryData];

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initNavigation();
    initScrollEffects();
    initLightbox();
    initForm();
});

// ============================================
// Gallery Functions
// ============================================
function initGallery() {
    renderGallery(galleryData);
}

function renderGallery(items) {
    galleryGrid.innerHTML = '';
    
    if (items.length === 0) {
        galleryEmpty.style.display = 'block';
        return;
    }
    
    galleryEmpty.style.display = 'none';
    
    items.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('role', 'listitem');
        galleryItem.setAttribute('data-index', index);
        
        // Generate placeholder SVG for missing images
        const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23252525' width='400' height='300'/%3E%3Ctext fill='%23666' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E`;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" 
                 alt="${item.title} - ${item.description}" 
                 loading="lazy"
                 onerror="this.src='${placeholderSvg}'">
            <div class="gallery-overlay">
                <div class="gallery-item-info">
                    <h3>${item.title}</h3>
                    <p>${getCategoryLabel(item.category)}</p>
                </div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
    
    // Add animation classes
    setTimeout(() => {
        const items = galleryGrid.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 50);
        });
    }, 100);
}

function getCategoryLabel(category) {
    const labels = {
        pintura: 'Pintura',
        escultura: 'Escultura',
        fotografia: 'Fotografía',
        digital: 'Arte Digital'
    };
    return labels[category] || category;
}

function filterGallery(category) {
    currentFilter = category;
    filteredGallery = category === 'todos' 
        ? [...galleryData] 
        : galleryData.filter(item => item.category === category);
    
    renderGallery(filteredGallery);
    
    // Update filter button states
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterGallery(btn.dataset.filter);
    });
});

// ============================================
// Navigation Functions
// ============================================
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without reload
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// ============================================
// Header Scroll Effect
// ============================================
function initScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // Initialize Intersection Observer for scroll animations
    initScrollAnimations();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + header.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
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
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// Lightbox Functions
// ============================================
function initLightbox() {
    // Close button
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Navigation buttons
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                navigateLightbox(1);
                break;
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    
    // Wrap around
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = filteredGallery.length - 1;
    } else if (currentLightboxIndex >= filteredGallery.length) {
        currentLightboxIndex = 0;
    }
    
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = filteredGallery[currentLightboxIndex];
    
    // Generate placeholder SVG for missing images
    const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect fill='%23252525' width='1200' height='800'/%3E%3Ctext fill='%23666' x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='24'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E`;
    
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxImage.onerror = function() {
        this.src = placeholderSvg;
    };
    
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = getCategoryLabel(item.category);
}

// ============================================
// Form Handling
// ============================================
function initForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span>Enviando...</span>';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = '¡Mensaje enviado correctamente!';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            formStatus.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }
    });
}

// ============================================
// Utility Functions
// ============================================
// Lazy load images with Intersection Observer
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
