// Add animations and interactions to enhance the sleek modern feel
console.log("Span landing page loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Check if this is first load or a navigation between pages
    const isFirstVisit = !sessionStorage.getItem('visited');
    
    // If not first visit, disable animations
    if (!isFirstVisit) {
        // Remove animations from elements by adding a class
        document.body.classList.add('no-animation');
    } else {
        // Mark as visited for future navigation
        sessionStorage.setItem('visited', 'true');
    }
    
    // Apply subtle glow effect to the button on hover
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25), 0 0 30px rgba(255, 255, 255, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        });
    }
    
    // Add hover effects for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.05)';
            icon.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 255, 255, 0.1)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
            icon.style.boxShadow = 'none';
        });
    });
}); 