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
document.addEventListener("DOMContentLoaded", () => {
    // Animation au survol des livres
    const bookItems = document.querySelectorAll(".book-item");

    bookItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalSlides = slides.length;
    let autoSlide;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        updateCarousel();
    }

    function prevSlide() {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000); // Change toutes les 3 secondes
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Navigation boutons
    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Pause quand on survole l’image
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);

    // Swipe mobile (touch)
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextSlide(); // Swipe gauche → suivant
        } else if (startX < endX - 50) {
            prevSlide(); // Swipe droite → précédent
        }
        stopAutoSlide();
        startAutoSlide();
    });

    updateCarousel();
    startAutoSlide(); // Lancer l’auto-défilement au chargement
});








