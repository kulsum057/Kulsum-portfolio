// IMPORTANT: Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'AKfycbyd2Qq6lu8tF-gsnc2L_onAdhWPstpRkDRGNa8HRBs';

// Wait for the page to fully load
window.onload = function() {
    // Page transition effect on load
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '1';
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
        }
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };
    
    // Disable submit button during submission
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Send data to Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Re-enable button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
        
        // Re-enable button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});