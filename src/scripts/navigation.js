/* ==========================================================================
   PK JEWELLERS - NAVIGATION MODULE
   Navigation logic and smooth scrolling
   ========================================================================== */

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin for smooth scrolling
gsap.registerPlugin(ScrollToPlugin);

/**
 * Initialize main navigation behavior
 */
export function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll behavior for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Initialize smooth scroll for anchor links
 */
export function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.length > 1) {
                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {
                    const navHeight = document.getElementById('mainNav').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    gsap.to(window, {
                        scrollTo: {
                            y: targetPosition,
                            autoKill: false
                        },
                        duration: 1,
                        ease: 'power3.inOut'
                    });
                }
            }
        });
    });
}
