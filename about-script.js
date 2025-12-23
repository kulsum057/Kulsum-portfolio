// Wait for the page to fully load
window.onload = function() {
    // Page transition effect on load
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '1';
    
    // Add floating animation to icons
    addFloatingAnimation();
};

// Add smooth transition effect for body
document.body.style.opacity = '0';

// Handle sidebar navigation with smooth page transition
document.querySelectorAll('.side-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        
        if (page) {
            // Add transition effect before navigation
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = page;
            }, 300);
        } else {
            console.log(`Sidebar button ${index + 1} clicked!`);
            // Add navigation logic for other pages here
        }
    });
});

// Add subtle floating animation to icons
function addFloatingAnimation() {
    const icons = document.querySelectorAll('.icon, .icon-social');
    
    icons.forEach((icon, index) => {
        // Random float animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        icon.style.animation += `, float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
}