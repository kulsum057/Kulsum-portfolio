// Wait for the page to fully load
window.onload = function() {
    // Add scroll reveal for sections that come into view
    observeSections();
};

// Handle project tile clicks - open links
document.querySelectorAll('.project-tile').forEach(tile => {
    tile.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank');
        }
    });
});

// Handle sidebar navigation
document.querySelectorAll('.side-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        
        if (page) {
            // Add transition effect before navigation
            document.body.style.transition = 'opacity 0.3s ease-in-out';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = page;
            }, 300);
        } else {
            console.log(`Sidebar button ${index + 1} clicked!`);
        }
    });
});

// Intersection Observer for scroll animations
function observeSections() {
    const sections = document.querySelectorAll('.work-section');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';