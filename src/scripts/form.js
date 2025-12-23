/* ==========================================================================
   PK JEWELLERS - FORM MODULE
   Contact form handling and interactions
   ========================================================================== */

import { gsap } from 'gsap';

/**
 * Initialize form interactions and validation
 */
export function initFormInteractions() {
    const form = document.getElementById('contactForm');
    const submitBtn = form?.querySelector('.btn-submit');

    if (!form) return;

    // Add ripple effect to submit button
    submitBtn?.addEventListener('click', function (e) {
        const ripple = this.querySelector('.btn-ripple');

        if (ripple) {
            ripple.remove();
        }

        const newRipple = document.createElement('span');
        newRipple.className = 'btn-ripple';

        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        newRipple.style.left = x + 'px';
        newRipple.style.top = y + 'px';

        this.appendChild(newRipple);

        setTimeout(() => {
            newRipple.remove();
        }, 600);
    });

    // WhatsApp phone numbers for each showroom
    const WHATSAPP_NUMBERS = {
        qutab: '917011103928',      // +91 70111 03928 (Qutab Plaza)
        nirvana: '919873924419'     // +91 98739 24419 (Nirvana Courtyard)
    };

    // Form submission handler - WhatsApp redirect
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const interest = document.getElementById('interest').value;
        const showroom = document.getElementById('showroom').value;
        const message = document.getElementById('message').value.trim();

        // Validate showroom selection
        if (!showroom) {
            alert('Please select a preferred showroom');
            return;
        }

        // Build WhatsApp message
        const interestLabels = {
            gold: 'Gold Jewellery',
            diamond: 'Diamond Jewellery',
            silver: 'Silver Jewellery',
            bridal: 'Bridal Collection',
            custom: 'Custom Design',
            other: 'Other Inquiry'
        };

        const showroomLabels = {
            qutab: 'Qutab Plaza (DLF Phase-I)',
            nirvana: 'Nirvana Courtyard (Sector 50)'
        };

        let whatsappMessage = `*New Inquiry from PK Jewellers Website*\n\n`;
        whatsappMessage += `*Name:* ${name}\n`;
        if (email) whatsappMessage += `*Email:* ${email}\n`;
        if (phone) whatsappMessage += `*Phone:* ${phone}\n`;
        if (interest) whatsappMessage += `*Interested In:* ${interestLabels[interest] || interest}\n`;
        whatsappMessage += `*Preferred Showroom:* ${showroomLabels[showroom]}\n`;
        if (message) whatsappMessage += `\n*Message:*\n${message}`;

        // Get the phone number based on showroom
        const whatsappNumber = WHATSAPP_NUMBERS[showroom];

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Animate button
        gsap.to(submitBtn, {
            scale: 0.98,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // Show success and redirect
        setTimeout(() => {
            submitBtn.querySelector('.btn-text').textContent = 'Opening WhatsApp...';
            submitBtn.style.background = '#25D366'; // WhatsApp green

            setTimeout(() => {
                // Open WhatsApp
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

                // Reset button and form
                submitBtn.querySelector('.btn-text').textContent = 'Send Message';
                submitBtn.style.background = '';
                form.reset();
            }, 500);
        }, 300);
    });

    // Add focus animations to inputs
    const inputs = form.querySelectorAll('.form-input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                boxShadow: '0 0 0 3px rgba(114, 47, 55, 0.15)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                boxShadow: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Initialize WhatsApp modal for branch selection
 */
export function initWhatsAppModal() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const modal = document.getElementById('whatsappModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const branchQutab = document.getElementById('branchQutab');
    const branchNirvana = document.getElementById('branchNirvana');

    if (!whatsappBtn || !modal) return;

    // WhatsApp numbers
    const WHATSAPP_NUMBERS = {
        qutab: '917011103928',      // +91 70111 03928 (Qutab Plaza)
        nirvana: '919873924419'     // +91 98739 24419 (Nirvana Courtyard)
    };

    // Open modal
    whatsappBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal functions
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Branch selection - Qutab Plaza
    branchQutab.addEventListener('click', () => {
        const message = encodeURIComponent('Hello! I am reaching out from your website. I would like to know more about PK Jewellers.');
        window.open(`https://wa.me/${WHATSAPP_NUMBERS.qutab}?text=${message}`, '_blank');
        closeModal();
    });

    // Branch selection - Nirvana Courtyard
    branchNirvana.addEventListener('click', () => {
        const message = encodeURIComponent('Hello! I am reaching out from your website. I would like to know more about PK Jewellers.');
        window.open(`https://wa.me/${WHATSAPP_NUMBERS.nirvana}?text=${message}`, '_blank');
        closeModal();
    });
}
