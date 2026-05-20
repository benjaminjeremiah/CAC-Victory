// ===========================
// FORM VALIDATION & HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // If validation passes, show success message
        showMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Clear form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        });
    });
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide message after 5 seconds
        setTimeout(function() {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ===========================
// SMOOTH NAVIGATION
// ===========================

// Set active nav link based on current page
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===========================
// SCROLL EFFECTS
// ===========================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%cWelcome to CAC Victory District Website!', 'color: #ffd700; font-size: 16px; font-weight: bold;');
console.log('Thank you for visiting us. May God bless you!');