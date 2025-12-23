// Wait for the page to fully load
window.onload = function() {
    // Page transition effect on load
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '1';
    
    //subtle animation to trophy icons
    addTrophyAnimation();
};

//smooth transition effect for body
document.body.style.opacity = '0';

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
        }
    });
});

//subtle animation to trophy icons
function addTrophyAnimation() {
    const icons = document.querySelectorAll('.achievement-icon');
    
    icons.forEach((icon, index) => {
        //hover effect with rotation
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(10deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        //subtle continuous animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        icon.style.animation += `, float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
}