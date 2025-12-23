/* ==========================================================================
   PK JEWELLERS - MAIN ENTRY POINT
   Application initialization
   ========================================================================== */

// Import styles
import '../styles/index.css';

// Import modules
import { initPageLoader } from './loader.js';
import { initNavigation, initSmoothScroll } from './navigation.js';
import {
    initHeroAnimations,
    initScrollAnimations,
    initParallaxEffects,
    initHoverEffects,
    initIntersectionObserver
} from './animations.js';
import { initFormInteractions, initWhatsAppModal } from './form.js';

/**
 * Initialize all application modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page loader first
    initPageLoader();

    // Initialize navigation
    initNavigation();

    // Initialize animations
    initHeroAnimations();
    initScrollAnimations();
    initParallaxEffects();
    initHoverEffects();
    initIntersectionObserver();

    // Initialize form
    initFormInteractions();
    initWhatsAppModal();

    // Initialize smooth scroll
    initSmoothScroll();

    console.log('✨ PK Jewellers website initialized');
});
