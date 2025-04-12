// Span AI Website JavaScript - Professional Version
console.log("Span AI website loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Check if this is first load or a navigation between pages
    const isFirstVisit = !sessionStorage.getItem('visited');
    
    // If not first visit, disable animations
    if (!isFirstVisit) {
        document.body.classList.add('no-animation');
    } else {
        // Mark as visited for future navigation
        sessionStorage.setItem('visited', 'true');
    }
    
    // Text logo hover effect
    const textLogo = document.querySelector('.text-logo span');
    if (textLogo) {
        textLogo.addEventListener('mouseenter', () => {
            textLogo.style.transform = 'scale(1.02)';
            textLogo.style.filter = 'drop-shadow(0 8px 25px rgba(255, 85, 0, 0.4))';
        });
        
        textLogo.addEventListener('mouseleave', () => {
            textLogo.style.transform = '';
            textLogo.style.filter = '';
        });
    }
    
    // Enhanced hover effects for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-2px)';
            ctaButton.style.backgroundColor = 'var(--primary-light)';
            ctaButton.style.boxShadow = '0 6px 22px rgba(255, 85, 0, 0.35)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = '';
            ctaButton.style.backgroundColor = '';
            ctaButton.style.boxShadow = '';
        });
        
        ctaButton.addEventListener('mousedown', () => {
            ctaButton.style.transform = 'translateY(1px)';
            ctaButton.style.backgroundColor = 'var(--primary-dark)';
            ctaButton.style.boxShadow = '0 2px 8px rgba(255, 85, 0, 0.2)';
        });
        
        ctaButton.addEventListener('mouseup', () => {
            ctaButton.style.transform = 'translateY(-2px)';
            ctaButton.style.backgroundColor = 'var(--primary-light)';
            ctaButton.style.boxShadow = '0 6px 22px rgba(255, 85, 0, 0.35)';
        });
    }
    
    // Enhanced hover effects for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px)';
            icon.style.backgroundColor = 'rgba(255, 85, 0, 0.1)';
            icon.style.borderColor = 'rgba(255, 85, 0, 0.3)';
            icon.style.color = 'var(--primary-light)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
            icon.style.backgroundColor = '';
            icon.style.borderColor = '';
            icon.style.color = '';
        });
        
        icon.addEventListener('mousedown', () => {
            icon.style.transform = 'translateY(0)';
        });
    });
    
    // Adjust heights for mobile to ensure single page layout
    function adjustHeight() {
        const windowHeight = window.innerHeight;
        const landingContainer = document.querySelector('.landing-container');
        if (landingContainer) {
            landingContainer.style.minHeight = `${windowHeight}px`;
        }
    }
    
    // Initial adjustment
    adjustHeight();
    
    // Readjust on resize
    window.addEventListener('resize', adjustHeight);
}); 