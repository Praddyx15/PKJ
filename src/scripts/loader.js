/* ==========================================================================
   PK JEWELLERS - PAGE LOADER MODULE
   Page load animation handling
   ========================================================================== */

import { gsap } from 'gsap';
import { animateHeroContent } from './animations.js';

/**
 * Initialize page loader animation
 */
export function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    const body = document.body;

    // Add loading class to body
    body.classList.add('loading');

    // Hide loader after animations complete
    window.addEventListener('load', () => {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.6,
            delay: 1.2,
            ease: 'power2.out',
            onComplete: () => {
                loader.classList.add('hidden');
                body.classList.remove('loading');

                // Start hero animations after loader is hidden
                animateHeroContent();
            }
        });
    });
}
