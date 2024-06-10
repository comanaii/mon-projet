document.addEventListener("DOMContentLoaded", () => {
    // Toggle button functionality
    const toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const parentSection = event.target.closest(".story-section");
            const storyText = parentSection.querySelector(".story-text");
            const isVisible = storyText.style.display === "block";
            storyText.style.display = isVisible ? "none" : "block";
            event.target.textContent = isVisible ? "Lire la suite" : "Réduire";
        });
    });

    // Tab functionality
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetTab = event.target.getAttribute("data-tab");

            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            event.target.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // Leaflet map initialization
    const mapContainer = document.getElementById("map-container");
    if (mapContainer) {
        const map = L.map(mapContainer).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
});
