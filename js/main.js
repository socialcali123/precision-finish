/**
 * Precision Finish - Main JavaScript
 * A high-end converting website for an Exterior & Interior painter
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initStickyHeader();
    initTestimonialSlider();
    initScrollAnimation();
    initContactForm();
    initDropdownMenu();
});

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and X
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.mobile-menu') && !event.target.closest('.nav-links')) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    
    if (testimonials.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Function to show testimonial at specific index
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            testimonials[index].style.display = 'block';
            testimonials[index].classList.add('active');
            
            // Add fade-in animation
            testimonials[index].style.opacity = 0;
            setTimeout(() => {
                testimonials[index].style.opacity = 1;
                testimonials[index].style.transition = 'opacity 0.5s ease';
            }, 50);
        }
        
        // Event listeners for next and previous buttons
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
}

/**
 * Scroll Animation for Elements
 */
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.service-card, .benefit-card, .project-card, .section-header');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation class when element is in viewport
    function checkVisibility() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for elements
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Check visibility on page load
    checkVisibility();
}

/**
 * Contact Form Validation and Submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // We don't prevent default anymore to allow the form to submit to the mailto: link
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');
            const serviceSelect = document.getElementById('service');
            
            // Simple validation
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (phoneInput.value.trim() && !isValidPhone(phoneInput.value)) {
                showError(phoneInput, 'Please enter a valid phone number');
                isValid = false;
            } else {
                removeError(phoneInput);
            }
            
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            // If form is valid, allow the form to submit to the mailto: link
            if (isValid) {
                // Log form data for debugging
                console.log('Form is valid, submitting to admin@Precision');
                
                // Allow the form to submit naturally to the mailto: link
                return true;
            } else {
                // If form is not valid, prevent submission
                event.preventDefault();
                return false;
            }
        });
        
        // Helper functions for form validation
        function showError(input, message) {
            const formGroup = input.parentElement;
            const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
            
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            
            if (!formGroup.querySelector('.error-message')) {
                formGroup.appendChild(errorElement);
            }
            
            formGroup.classList.add('error');
            input.classList.add('error-input');
        }
        
        function removeError(input) {
            const formGroup = input.parentElement;
            const errorElement = formGroup.querySelector('.error-message');
            
            if (errorElement) {
                formGroup.removeChild(errorElement);
            }
            
            formGroup.classList.remove('error');
            input.classList.remove('error-input');
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function isValidPhone(phone) {
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            return phoneRegex.test(phone);
        }
    }
}

/**
 * Project Gallery Filtering
 * For the gallery.html page
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            item.style.opacity = 1;
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = 0;
                        item.style.transform = 'scale(0.8)';
                        
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Dropdown Menu Functionality
 */
function initDropdownMenu() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (dropdowns.length > 0) {
        // For desktop: Handle hover interactions
        dropdowns.forEach(dropdown => {
            // Add touch support for mobile devices
            dropdown.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Handle keyboard navigation
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (dropdownToggle && dropdownMenu) {
                dropdownToggle.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        dropdown.classList.add('active');
                        const firstMenuItem = dropdownMenu.querySelector('a');
                        if (firstMenuItem) firstMenuItem.focus();
                    }
                });
                
                // Allow keyboard navigation within the dropdown menu
                const menuItems = dropdownMenu.querySelectorAll('a');
                menuItems.forEach((item, index) => {
                    item.addEventListener('keydown', function(e) {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            if (index < menuItems.length - 1) {
                                menuItems[index + 1].focus();
                            }
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            if (index > 0) {
                                menuItems[index - 1].focus();
                            } else {
                                dropdownToggle.focus();
                                dropdown.classList.remove('active');
                            }
                        } else if (e.key === 'Escape') {
                            dropdownToggle.focus();
                            dropdown.classList.remove('active');
                        }
                    });
                });
            }
        });
    }
}

// Call additional functions if specific pages are loaded
if (document.querySelector('.gallery-page')) {
    initGalleryFilter();
}

// Initialize smooth scroll for all pages
initSmoothScroll();