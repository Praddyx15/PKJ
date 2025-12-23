/* ==========================================================================
   PK JEWELLERS - ANIMATIONS MODULE
   GSAP-Powered Scroll and Page Animations
   ========================================================================== */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize hero gradient background animation
 */
export function initHeroAnimations() {
    const heroGradient = document.querySelector('.hero-gradient');

    if (heroGradient) {
        gsap.to(heroGradient, {
            backgroundPosition: '100% 50%',
            duration: 15,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
    }
}

/**
 * Animate hero content after page load
 */
export function animateHeroContent() {
    const tl = gsap.timeline({
        defaults: {
            ease: 'power3.out'
        }
    });

    // Animate eyebrow
    tl.to('.hero-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8
    });

    // Animate title lines with stagger
    tl.to('.title-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15
    }, '-=0.4');

    // Animate subtitle
    tl.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.4');

    // Animate CTA buttons
    tl.to('.hero-ctas', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.4');

    // Animate scroll indicator
    tl.to('.hero-scroll', {
        opacity: 1,
        duration: 0.8
    }, '-=0.2');
}

/**
 * Initialize scroll-triggered animations for all sections
 */
export function initScrollAnimations() {
    // About Section
    gsap.to('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            once: true
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Gold line animation in About
    gsap.from('.about .gold-line', {
        scrollTrigger: {
            trigger: '.about .gold-line',
            start: 'top 80%',
            once: true
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.out'
    });

    // About visual animation
    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            once: true
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: 'power3.out'
    });

    // Collection cards stagger animation
    const collectionCards = gsap.utils.toArray('.collection-card');

    collectionCards.forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Feature cards animation
    const featureCards = gsap.utils.toArray('.feature-card');

    featureCards.forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            onComplete: () => {
                card.classList.add('animated');
            }
        });
    });

    // Bridal section animation
    gsap.to('.bridal-content', {
        scrollTrigger: {
            trigger: '.bridal',
            start: 'top 60%',
            once: true
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.to('.bridal-visual', {
        scrollTrigger: {
            trigger: '.bridal',
            start: 'top 60%',
            once: true
        },
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Location section animation
    gsap.to('.location-map', {
        scrollTrigger: {
            trigger: '.location',
            start: 'top 70%',
            once: true
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.to('.location-info', {
        scrollTrigger: {
            trigger: '.location',
            start: 'top 70%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Contact section animation
    gsap.to('.contact-content', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            once: true
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.to('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            once: true
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Gold lines animation
    gsap.utils.toArray('.gold-line').forEach(line => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 85%',
                once: true
            },
            scaleX: 0,
            transformOrigin: 'center',
            duration: 1.2,
            ease: 'power3.out'
        });
    });
}

/**
 * Initialize parallax effects
 */
export function initParallaxEffects() {
    const bridalBg = document.querySelector('.bridal-bg');

    if (bridalBg) {
        gsap.to(bridalBg, {
            scrollTrigger: {
                trigger: '.bridal',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: 50,
            ease: 'none'
        });
    }

    // Badge animation in about section
    const aboutBadge = document.querySelector('.about-badge');

    if (aboutBadge) {
        gsap.from(aboutBadge, {
            scrollTrigger: {
                trigger: aboutBadge,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
    }
}

/**
 * Initialize hover effects for interactive elements
 */
export function initHoverEffects() {
    // Collection card hover effects
    document.querySelectorAll('.collection-card').forEach(card => {
        const image = card.querySelector('.card-image');
        const border = card.querySelector('.card-border');

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 50px rgba(61, 43, 31, 0.15)',
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(image, {
                scale: 1.05,
                duration: 0.6,
                ease: 'power2.out'
            });

            gsap.to(border, {
                borderColor: '#C9A962',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: 'none',
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(image, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });

            gsap.to(border, {
                borderColor: 'transparent',
                duration: 0.3
            });
        });
    });

    // Primary button pulse animation
    const primaryBtn = document.querySelector('.btn-primary');

    if (primaryBtn) {
        const pulseAnimation = gsap.to(primaryBtn, {
            boxShadow: '0 0 0 8px rgba(114, 47, 55, 0.15)',
            duration: 1.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            paused: true
        });

        // Start pulse after page load
        setTimeout(() => {
            pulseAnimation.play();
        }, 2500);

        primaryBtn.addEventListener('mouseenter', () => pulseAnimation.pause());
        primaryBtn.addEventListener('mouseleave', () => pulseAnimation.play());
    }

    // Feature card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                boxShadow: '0 10px 30px rgba(61, 43, 31, 0.1)',
                backgroundColor: '#FAF7F2',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: 'none',
                backgroundColor: '#F5F0E8',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Social link hover effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -3,
                backgroundColor: '#722F37',
                color: '#FFFFFF',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                backgroundColor: '#F5F0E8',
                color: '#722F37',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Initialize intersection observer fallback for non-GSAP animations
 */
export function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale').forEach(el => {
        observer.observe(el);
    });
}
