// Sample data for events
const events = [
    { 
        date: '2024-10-15', title: 'Village Cleanliness Drive', 
        description: 'A collective effort to clean our village and promote hygiene and sanitation. The event will include cleaning public spaces, educating villagers about waste management, and ensuring proper waste disposal systems are in place. Volunteers from every household are encouraged to participate. Cleaning equipment will be provided, and refreshments will be arranged for all participants. Join us in making our village cleaner and healthier for everyone.' , 
        picture: '/Images/kukudsad.png' },
    { 
        date: '2024-11-01', title: 'Health Camp', 
        description: 'Free health check-up for villagers. The camp will offer general health screenings, diabetes and blood pressure tests, eye exams, and consultations with doctors and specialists. Villagers are encouraged to take advantage of this opportunity to monitor their health and receive medical advice from professionals.' ,
        picture: '/Images/blood.jpg' }
];

// Display Events once the window has loaded
window.onload = function() {
    const eventList = document.getElementById('event-list'); // Ensure you're targeting the correct ID
    events.forEach(event => {
        // Truncate description to 50 characters for the preview
        const shortDescription = event.description.length > 50 ? event.description.substring(0, 50) + '...' : event.description;

        // Create event card using Bootstrap classes
        const eventCard = `
            <div class="col-md-10">
                <div class="card mb-4 shadow-sm event-card">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text short-description">${shortDescription}</p>
                        <img class="event-image" src="${event.picture}" alt="Event image">
                        <p class="card-text full-description">${event.description}</p>
                        <small class="text-muted">${event.date}</small>
                    </div>
                </div>
            </div>`;
        // Append the event card to the event-list container
        eventList.innerHTML += eventCard;
    });
};

// Form submission (future feature)
const form = document.getElementById('contact-form');
if (form) {
    form.onsubmit = function(event) {
        event.preventDefault();
        alert('Message sent!');
    };
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevents actual form submission for demo purposes
            alert('Message sent!');
        }

        form.classList.add('was-validated');
    }, false);
});

// language 
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher buttons
    const englishBtn = document.getElementById('english-btn');
    const marathiBtn = document.getElementById('marathi-btn');

    // Function to switch language
    function switchLanguage(language) {
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            element.textContent = translations[language][key];
        });
    }

    // Event listeners for buttons
    englishBtn.addEventListener('click', () => switchLanguage('en'));
    marathiBtn.addEventListener('click', () => switchLanguage('mr'));

    // Set default language (English)
    switchLanguage('en');
});
