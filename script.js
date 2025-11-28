// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button event listeners
document.getElementById('start-registration').addEventListener('click', function() {
    window.location.href = 'register.html';
});

document.getElementById('download-schedule').addEventListener('click', function() {
    alert('Downloading schedule...');
   
});

// Simple form validation example (if we had forms)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation logic here
            alert('Form submitted successfully!');
        });
    }
}

// Initialize any additional functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
    // Add any initialization code here
});