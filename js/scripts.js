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