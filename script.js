// Wait for the page to fully load
window.onload = function() {
    //ID card element
    const idCard = document.getElementById("idCard");
    
    //class that triggers the slide-down animation
    if (idCard) {
        idCard.classList.add("show-card");
    }
    
    // Page transition effect
    document.body.style.opacity = '1';
};

//smooth transition effect for body
document.body.style.transition = 'opacity 0.3s ease-in-out';
document.body.style.opacity = '0';

// Click event to download button
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        console.log('Download CV clicked!');
        // Add your download CV logic here
        window.open('https://drive.google.com/file/d/11mpMkP17O9OKaa85viZgHic4DGPaYsEl/view?usp=drivesdkpath/to/your/cv.pdf', '_blank');
    });
}

// Sidebar navigation with smooth page transition
document.querySelectorAll('.side-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        console.log(`Sidebar button ${index + 1} clicked!`);
        
        // Navigate to My Work page when projects button (index 1) is clicked
        if (index === 1) {
            //transition effect before navigation
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = 'work.html';
            }, 300);
        }
    });
});