// --- Client-Side Form Validation (Part 3 Requirement) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Validate the Contact Form (contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            validateForm(event, contactForm);
        });
    }

    // 2. Validate the Donation Form (donate.html)
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function(event) {
            validateForm(event, donationForm);
        });
    }

    // 3. Validate the Newsletter Form (index.html)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            validateForm(event, newsletterForm);
        });
    }
});

/**
 * General function to validate a form and display status messages.
 * @param {Event} event - The submission event.
 * @param {HTMLFormElement} form - The form element to validate.
 */
function validateForm(event, form) {
    let isValid = true;
    const errorDisplay = form.querySelector('#form-error-message');
    const statusDisplay = form.querySelector('#submission-status') || document.getElementById('newsletter-status');
    
    // Clear previous messages
    if (errorDisplay) { errorDisplay.textContent = ''; }
    if (statusDisplay) { statusDisplay.textContent = ''; }
    
    // Iterate over all required inputs in the form
    const requiredInputs = form.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }

        // Specific validation for donation amount
        if (form.id === 'donationForm' && input.id === 'amount' && isValid) {
            const amount = parseFloat(input.value.trim());
            if (amount < 10) {
                isValid = false;
                // Add temporary error style for visibility
                input.style.border = '2px solid red'; 
            } else {
                input.style.border = '1px solid #dee2e6';
            }
        }
    });

    // Check for radio buttons on the donation form
    if (form.id === 'donationForm') {
        const paymentRadios = form.querySelectorAll('input[name="paymentMethod"]');
        let radioChecked = false;
        paymentRadios.forEach(radio => {
            if (radio.checked) {
                radioChecked = true;
            }
        });
        if (!radioChecked) {
            isValid = false;
        }
    }


    if (!isValid) {
        event.preventDefault(); // Stop form submission
        const errorMessage = 'Please fill in all required fields correctly.';
        if (errorDisplay) {
            errorDisplay.textContent = errorMessage;
        } else if (statusDisplay) {
            // For newsletter, use the status area for the error
            statusDisplay.textContent = errorMessage;
            statusDisplay.style.color = 'red';
        }
        
    } else {
        // If validation passes, we still prevent the actual submission 
        // because there's no backend, and show a success message.
        event.preventDefault();
        
        // Show success message
        const successMessage = (form.id === 'newsletterForm') 
            ? 'Thank you for subscribing!' 
            : 'Form submitted successfully! (No data was sent to a server)';

        if (statusDisplay) {
            statusDisplay.textContent = successMessage;
            statusDisplay.style.color = 'green';
        }
        
        // Clear the form after a simulated successful submission
        form.reset();
        
        // Clear error styles
        form.querySelectorAll('input').forEach(input => {
            input.style.border = '1px solid #dee2e6';
        });

        // Hide success message after a few seconds
        setTimeout(() => {
            if (statusDisplay) { statusDisplay.textContent = ''; }
        }, 5000);
    }
}