// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for nav links
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission handling (Hidden Iframe Method)
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', () => {
        // Allow the form to submit naturally to the hidden iframe
        // Just update the UI to show success
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        // Simulate a brief delay for UX, then show success message
        setTimeout(() => {
            contactForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();

            // Reset form for next time
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Message";
        }, 800);
    });
}

function resetForm() {
    contactForm.classList.remove('hidden');
    successMessage.classList.add('hidden');
}
