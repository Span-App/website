// Add any JavaScript interactions here if needed in the future.
console.log("Span landing page loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Add subtle hover effects for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });
}); 