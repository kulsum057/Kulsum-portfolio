window.onload = function() {
    // Page transition effect on load
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '1';
};

document.body.style.opacity = '0';

// Handle sidebar navigation with smooth page transition
document.querySelectorAll('.side-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        
        if (page) {
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = page;
            }, 300);
        } else {
            console.log(`Sidebar button ${index + 1} clicked!`);
        }
    });
});