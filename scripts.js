document.addEventListener("DOMContentLoaded", () => {
    // Fonctionnalité pour révéler les sections de l'histoire au défilement
    const storySections = document.querySelectorAll(".story-section");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        storySections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    // Ajouter un écouteur d'événement pour le défilement
    window.addEventListener("scroll", revealOnScroll);

    // Révéler les sections qui sont déjà visibles lors du chargement de la page
    revealOnScroll();

    // Fonctionnalité des onglets
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

    // Initialisation de la carte Leaflet
    const mapContainer = document.getElementById("map-container");
    if (mapContainer) {
        const map = L.map(mapContainer).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    // Menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});

