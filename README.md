# Helping hands updated
NPO organization
# Helping Hands Foundation Website

## 1. Project Overview

This project is a complete, responsive, multi-page static website for the **Helping Hands Foundation**, a Non-Profit Organization (NPO) focused on empowering and supporting marginalized groups in South Africa. The site's primary goal is to inform the public about the organization's mission, showcase its impact, and facilitate donations and volunteer sign-ups.

**Mission:** To encourage and assist marginalized groups by means of outreach initiatives and long-term sponsorships.
**Vision:** A South Africa where all families are able to obtain dignity and the necessities of life.

## 2. Technology Stack

* **HTML5:** Used for the semantic structure of all six pages.
* **CSS3:** Used for all styling, layout, and responsiveness, defined in a single external stylesheet (`style.css`).

## 3. Project Structure

The project is organized into seven core files, providing six distinct web pages:

| File Name | Description | Key Sections / Purpose |
| :--- | :--- | :--- |
| `index.html` | **Homepage** | Mission/Vision, Impact Stats (5,000+ Families Fed), Program Previews, Newsletter sign-up. |
| `programs.html` | **Our Programs** | Detailed descriptions of **Food Outreach**, **Clothing Drives**, and **Education Support**. |
| `Events.html` | **Our Events** | Lists **Upcoming Events** (e.g., Annual Gala on Nov 20, 2025) and a Past Events Gallery. |
| `Get-involved.html` | **Get Involved** | Outlines opportunities for **Volunteering**, **Fundraising**, and **Corporate Partnerships**. |
| `donate.html` | **Donate** | Donation form with suggested amounts in **ZAR** and payment gateway placeholders. |
| `contact.html` | **Contact Us** | Form for inquiries and official contact details (Address: Johannesburg, Email, Phone). |
| `style.css` | **Styling** | Global styles, Flexbox/Grid layouts, and Mobile-First responsive design. |

## 4. Technical Highlights & Responsive Design

### 4.1. Semantic HTML & Accessibility
* **Semantic Tags:** Extensive use of `<header>`, `<nav>`, `<section>`, and `<footer>`.
* **Accessibility:** All forms (`contact.html`, `donate.html`) use correctly paired `<label>` and `for`/`id` attributes. The `required` attribute is used for mandatory input fields.

### 4.2. Layout Techniques
* The layout relies on **Flexbox** (for navigation and simple alignments) and **CSS Grid** (for complex, multi-column sections like Impact Stats and Event Galleries).
* Relative units (`rem` and `em`) are used across the board for scalable typography and spacing.

### 4.3. Mobile Responsiveness
* The project implements a **Mobile-First** approach.
* A key media query at **`@media (max-width: 768px)`** ensures:
    * The **Navigation Bar** collapses from horizontal to a vertical, stacked list.
    * All multi-column layouts (Hero, Stats, Programs) stack into a **single column** for optimal mobile readability.

## 5. Getting Started

1.  Clone or download the project files.
2.  Open **`index.html`** in any web browser to view the homepage and navigate the site.
3.  Ensure the **`style.css`** file is linked and accessible for proper rendering.
### 3.4. Responsive Design Screenshots
/* ----------------------------------------------------------------
 * Base and Typography
 * ---------------------------------------------------------------- */
:root {
    --primary-color: #007bff; /* Blue */
    --secondary-color: #28a745; /* Green */
    --accent-color: #ffc107; /* Yellow */
    --text-color: #333;
    --background-light: #f8f9fa;
    --border-color: #dee2e6;
    --font-family: 'Arial', sans-serif;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    margin: 0;
    padding: 0;
    color: var(--text-color);
    background-color: #fff;
}

main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3 {
    color: var(--primary-color);
    margin-top: 0;
}

/* ----------------------------------------------------------------
 * Navigation and Footer
 * ---------------------------------------------------------------- */

nav {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav img {
    height: 40px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
}

footer img {
    height: 50px;
    margin-bottom: 15px;
}

footer div a {
    color: var(--accent-color);
    margin: 0 10px;
    text-decoration: none;
}

/* ----------------------------------------------------------------
 * Hero Section (index.html header)
 * ---------------------------------------------------------------- */

header {
    position: relative;
    text-align: center;
    color: white;
    margin-bottom: 40px;
}

header img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    filter: brightness(0.5);
}

header div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
}

header h1 {
    color: white;
    font-size: 2.5em;
    margin-bottom: 10px;
}

header a {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
}

header a:first-of-type {
    background-color: var(--secondary-color);
    color: white;
}

header a:last-of-type {
    background-color: var(--accent-color);
    color: var(--text-color);
}

/* ----------------------------------------------------------------
 * General Section Styling
 * ---------------------------------------------------------------- */

section {
    padding: 20px 0;
    border-bottom: 1px solid var(--border-color);
}

section:last-of-type {
    border-bottom: none;
}

section h2 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 2em;
}

section img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    margin: 15px auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Flex layout for program/event lists */
.event-list, .past-events-gallery, .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    text-align: center;
}

.past-events-gallery img {
    height: 200px;
    object-fit: cover;
}

.cta {
    background-color: var(--background-light);
    padding: 40px 20px;
    text-align: center;
    border-radius: 8px;
}

/* ----------------------------------------------------------------
 * Forms and Inputs
 * ---------------------------------------------------------------- */

form {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: var(--background-light);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

form div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    box-sizing: border-box; /* Crucial for padding/border not to exceed width */
}

/* Donation Quick Select Buttons */
#donationForm > div:nth-child(3) > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

#donationForm button[data-amount] {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
}

#donationForm button[data-amount]:hover {
    background-color: var(--secondary-color);
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1em;
    margin-top: 10px;
    transition: background-color 0.3s;
}

button[type="submit"]:hover {
    background-color: #1e7e34;
}

/* Map Placeholder Styling */
#location-map {
    margin: 20px 0;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
}

/* ----------------------------------------------------------------
 * Responsive Overrides (Mobile First)
 * ---------------------------------------------------------------- */

/* Tablet and Desktop Layout Adjustments */
@media (min-width: 768px) {
    nav {
        padding: 10px 40px;
    }

    header img {
        height: 500px;
    }

    header h1 {
        font-size: 3em;
    }

    /* Program sections alignment */
    main section:not(:first-child) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 40px;
        align-items: center;
        text-align: left;
    }

    main section:nth-child(even) {
        grid-template-columns: 2fr 1fr;
    }

    main section img {
        margin: 0;
    }

    main section h2 {
        text-align: left;
        grid-column: 1 / -1; /* spans all columns */
        margin-bottom: 10px;
    }

    /* For even sections, move image to the right */
    main section:nth-child(even) h2 {
        text-align: right;
    }
}
To demonstrate the responsive design achieved with CSS Media Queries, here are comparative views of the homepage.

#### Desktop View (Computer)

![![Alt text](<images/desktop view.PNG>)](desktop%20view.jpg)

#### Mobile View (Tablet/Phone)

![![Alt text](<images/mobile view png.PNG>).](mobile%20view%20png.PNG)

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
   // --- General Site Functionality (Part 3 Requirement) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Donation Quick Select Buttons (donate.html)
    setupDonationQuickSelects();

    // 2. Lightbox Gallery Initialization (Events.html)
    // NOTE: This assumes you have linked the Lightbox library (e.g., SimpleLightbox).
    initializeLightbox();

    // 3. Interactive Map Initialization (contact.html)
    // NOTE: This assumes you have linked the Leaflet library for the map to render.
    initializeInteractiveMap();
});


/**
 * Sets up click handlers for the donation quick-select buttons.
 */
function setupDonationQuickSelects() {
    const donationForm = document.getElementById('donationForm');
    if (!donationForm) return;

    const amountInput = document.getElementById('amount');
    const quickButtons = donationForm.querySelectorAll('button[data-amount]');

    quickButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.getAttribute('data-amount');
            if (amountInput) {
                amountInput.value = amount;
            }
        });
    });
}

/**
 * Initializes the Lightbox for the Past Events Gallery.
 */
function initializeLightbox() {
    // Check if the required Lightbox library (e.g., SimpleLightbox) function exists.
    // If you are using SimpleLightbox, the global variable 'SimpleLightbox' will exist.
    if (typeof SimpleLightbox !== 'undefined') {
        // Target the gallery container's links to apply the Lightbox effect
        try {
            const gallery = new SimpleLightbox('.past-events-gallery a', {
                // Options for SimpleLightbox (can be customized)
                captionsData: 'data-title', // Use the data-title attribute for captions
                navText: ['←', '→']
            });
            console.log('Lightbox gallery initialized successfully.');
        } catch (error) {
            console.error('Error initializing Lightbox:', error);
        }
    } else {
        // Fallback message if the library is not linked
        const galleryElement = document.getElementById('lightbox-gallery');
        if (galleryElement) {
             console.warn('Lightbox library not found. Gallery links are functional, but the lightbox effect will not appear.');
             // Optional: Display a message on the page if necessary, but console is cleaner.
        }
    }
}

/**
 * Initializes the Leaflet Interactive Map on the contact page.
 */
function initializeInteractiveMap() {
    const mapContainer = document.getElementById('location-map');
    // Check if the container exists and the Leaflet library (L) is loaded
    if (mapContainer && typeof L !== 'undefined') {
        
        // Define Coordinates for Johannesburg Office (Example: Sandton)
        const joBurgCoords = [-26.0463, 28.0673]; 
        const zoomLevel = 13;

        // Clear the "Map loading..." placeholder text
        mapContainer.innerHTML = ''; 

        // 1. Initialize the map
        const map = L.map('location-map').setView(joBurgCoords, zoomLevel);

        // 2. Add the base tile layer (using OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // 3. Add a marker for the office location
        L.marker(joBurgCoords)
            .addTo(map)
            .bindPopup("<b>Helping Hands Foundation</b><br>Our Main Office")
            .openPopup();
            
        console.log('Leaflet map initialized successfully.');

    } else if (mapContainer) {
        // Inform the user if the map library is missing
        mapContainer.innerHTML = `<p style="text-align: center; padding-top: 180px; color: red;">Error: Map library (Leaflet) not loaded.</p>`;
        console.warn('Map container found, but Leaflet library (L) is not defined. Interactive map cannot be loaded.');
    }
}
References

This document lists the sources and tools used in the development of the Helping Hands Foundation website, formatted according to the Harvard Referencing Style.

Web Development Standards and Guides

W3C (World Wide Web Consortium) (2024) HTML Living Standard. Available at: https://html.spec.whatwg.org/ (Accessed: 19 November 2025).

W3C (World Wide Web Consortium) (2024) Cascading Style Sheets (CSS) Current Snapshots. Available at: https://www.w3.org/Style/CSS/current-work (Accessed: 19 November 2025).

MDN Web Docs (2024) JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 19 November 2025).

Google Developers (2024) Web Fundamentals: Responsive Web Design Basics. Available at: https://developers.google.com/web/fundamentals/design-and-ux/responsive/ (Accessed: 19 November 2025).

External Libraries and Resources

The following third-party libraries were linked in the HTML files and implemented in js/scripts.js to provide the Lightbox and Interactive Map features:

Leaflet (2024) Leaflet – A JavaScript library for interactive maps. Available at: https://leafletjs.com/ (Accessed: 19 November 2025).

Used for creating the interactive location map on the contact page.

SimpleLightbox (2024) SimpleLightbox documentation. Available at: https://simplelightbox.dev/ (Accessed: 19 November 2025).

Used for the image gallery Lightbox effect on the Events page.

OpenStreetMap contributors (2024) OpenStreetMap. Available at: https://www.openstreetmap.org/ (Accessed: 19 November 2025).

The open-source map data used by the Leaflet library for the base map layer.

Image Placeholders

The placeholder images used throughout the HTML documents were generated using an external service for development purposes.

Placehold.co (2024) The only image placeholder service you'll need. Available at: https://placehold.co/ (Accessed: 19 November 2025)
