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
        index = (index + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function startAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    prevBtn.addEventListener("click", () => {
        prevSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        startAutoSlide();
    });

    // Pause survol (uniquement desktop)
    if (window.innerWidth > 768) {
        carousel.addEventListener("mouseenter", stopAutoSlide);
        carousel.addEventListener("mouseleave", startAutoSlide);
    }

    // Swipe mobile amélioré
    let startX = 0;
    let isSwiping = false;

    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (!isSwiping) return;
        let moveX = e.touches[0].clientX;
        let diff = startX - moveX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            isSwiping = false;
        }
    });

    carousel.addEventListener("touchend", () => {
        isSwiping = false;
        startAutoSlide();
    });

    updateCarousel();
    startAutoSlide();
});


document.addEventListener("DOMContentLoaded", function() {
    const summaries = document.querySelectorAll('[id^="book-summary"]');

    summaries.forEach(summary => {
        summary.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const disabledLinks = document.querySelectorAll('.disabled-link');

    disabledLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche l'ouverture du lien
            alert("Ce livre n'est pas encore disponible. Restez à l'affût !");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le premier et le deuxième titre et contenu de lettre
    const toggleLettre1 = document.getElementById("toggle-lettre-1");
    const contenuLettre1 = document.querySelector("#toggle-lettre-1 + .lettre-contenu");

    const toggleLettre2 = document.getElementById("toggle-lettre-2");
    const contenuLettre2 = document.querySelector("#toggle-lettre-2 + .lettre-contenu");

    // Fonction d'ouverture/fermeture des lettres
    function handleLetterToggle(toggleLettre, contenuLettre) {
        if (toggleLettre && contenuLettre) {
            toggleLettre.addEventListener("click", () => {
                const visible = contenuLettre.style.display === "block";
                contenuLettre.style.display = visible ? "none" : "block";
                if (!visible) {
                    lancerCoeurs(toggleLettre);
                }
            });
        }
    }

    // Lancer les cœurs avec animation
    function lancerCoeurs(sourceElement) {
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = `${Math.random() * 80 + 10}%`;
            heart.style.animationDelay = `${Math.random() * 0.5}s`;
            sourceElement.appendChild(heart);
            setTimeout(() => heart.remove(), 1500);
        }
    }

    // Appeler la fonction pour chaque lettre
    handleLetterToggle(toggleLettre1, contenuLettre1);
    handleLetterToggle(toggleLettre2, contenuLettre2);
});



document.addEventListener("DOMContentLoaded", () => {
  const imgLeo = document.getElementById("leo-toggle");
  const texteLeo = document.querySelector(".hommage-texte");

  if (imgLeo && texteLeo) {
    imgLeo.addEventListener("click", () => {
      texteLeo.style.display = (texteLeo.style.display === "none") ? "block" : "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("secret-password");
  const validateBtn = document.getElementById("validate-password");
  const letter = document.getElementById("secret-letter");
  const errorMsg = document.getElementById("password-error");
  const prompt = document.getElementById("password-prompt");

  const correctPassword = "pamela85"; // 🔐 Mot de passe à personnaliser

  validateBtn?.addEventListener("click", () => {
    if (passwordInput.value.toLowerCase() === correctPassword) {
      prompt.classList.add("fade-out");
      setTimeout(() => {
        prompt.style.display = "none";
        letter.classList.add("reveal");
      }, 600); // attendre que l'animation de disparition se termine
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Mot de passe incorrect.";
      letter.classList.remove("reveal");
    }
  });
});

document.querySelectorAll('.toggle-letter').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const formCoquin = document.getElementById("coquin-quiz-form");
  const resultCoquin = document.getElementById("quiz-coquin-result");
  const toggleCoquin = document.getElementById("toggle-coquin");
  const quizCoquinSection = document.getElementById("quiz-coquin");

  // Affichage/réduction du quiz au clic
  if (toggleCoquin && quizCoquinSection) {
    toggleCoquin.addEventListener("click", () => {
      quizCoquinSection.classList.toggle("hidden");
    });
  }

  // Traitement du formulaire
  if (formCoquin) {
    formCoquin.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;
      let answered = 0;

      for (let i = 1; i <= 10; i++) {
        const answer = formCoquin.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
          score += parseInt(answer.value);
          answered++;
        }
      }

      if (answered < 10) {
        resultCoquin.textContent = `⚠️ Tu dois répondre aux 10 questions (il t'en manque ${10 - answered})`;
        resultCoquin.style.color = "#ffcc00";
        return;
      }

      let message = "";
      if (score >= 18) {
        message = `🔥 ${score}/20 – Tu me connais comme personne... 😍`;
      } else if (score >= 14) {
        message = `💋 ${score}/20 – Tu me chauffes rien qu'à lire ça !`;
      } else if (score >= 10) {
        message = `😉 ${score}/20 – On va devoir approfondir tout ça...`;
      } else {
        message = `🤭 ${score}/20 – Hmmm... une séance pratique s’impose.`;
      }

      resultCoquin.textContent = message;
      resultCoquin.style.color = "#ffb6c1";

      // Réinitialisation + fermeture après 3 secondes
      setTimeout(() => {
        formCoquin.reset();
        resultCoquin.textContent = '';
        quizCoquinSection.classList.add("hidden");
      }, 3000);
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const togglePamela = document.getElementById("toggle-pamela");
  const pamelaSection = document.getElementById("quiz-pamela");
  const pamelaForm = document.getElementById("pamela-quiz-form");
  const pamelaResult = document.getElementById("quiz-pamela-result");

  if (togglePamela && pamelaSection) {
    togglePamela.addEventListener("click", () => {
      pamelaSection.classList.toggle("hidden");
    });
  }

  if (pamelaForm) {
    pamelaForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let score = 0;
      let answered = 0;

      for (let i = 1; i <= 10; i++) {
        const selected = pamelaForm.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
          score += parseInt(selected.value);
          answered++;
        }
      }

      if (answered < 10) {
        pamelaResult.textContent = `⚠️ Tu dois répondre à toutes les questions (${10 - answered} manquantes)`;
        pamelaResult.style.color = "#ffcc00";
        return;
      }

      let message = "";
      if (score >= 18) {
        message = `🌟 ${score}/20 – Tu me connais par cœur !`;
      } else if (score >= 14) {
        message = `😊 ${score}/20 – Pas mal du tout !`;
      } else {
        message = `😅 ${score}/20 – On va devoir se redécouvrir !`;
      }

      pamelaResult.textContent = message;
      pamelaResult.style.color = "#007acc";

      // Réinitialisation après 3 secondes
      setTimeout(() => {
        pamelaForm.reset();
        pamelaResult.textContent = '';
        pamelaSection.classList.add("hidden"); // Ferme la section
        }, 3000);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.love-letter-obscure .toggle-letter').forEach(title => {
    title.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if(content.classList.contains('open')) {
        content.classList.remove('open');
      } else {
        content.classList.add('open');
      }
    });
  });
});

  document.addEventListener('DOMContentLoaded', () => {
  /* ===== BURGER ===== */
  const btn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('site-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  /* ===== ARBRE DE VIE ===== */
  document.addEventListener('click', (e) => {
    const title = e.target.closest('.pamela-tree-title');
    if (!title) return;
    const container = title.closest('.pamela-tree-container');
    if (container) container.classList.toggle('open');
  });
});

// Ouverture/fermeture + pluie d'étoiles (prefix astro-)
document.addEventListener('DOMContentLoaded', () => {
  const title   = document.getElementById('toggle-astro');
  const content = document.querySelector('#toggle-astro + .astro-content');
  const box     = title?.closest('.astro-container');

  if (!title || !content || !box) return;

  title.addEventListener('click', () => {
    const opening = !content.classList.contains('show');
    content.style.display = 'block';         // assure la place
    requestAnimationFrame(() => content.classList.toggle('show'));

    if (opening) spawnStars(box, 20);        // nombre d’étoiles à l’ouverture
    else setTimeout(() => {                  // referme proprement après l’anim
      content.classList.remove('show');
      setTimeout(() => content.style.display = 'none', 350);
    }, 0);
  });

  function spawnStars(container, count = 16) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'astro-star';
      // position X aléatoire et dérive légère pendant la chute
      const left = Math.random() * 100;                // en %
      const drift = (Math.random() * 80 - 40) + 'px';  // -40px à +40px
      star.style.left = left + '%';
      star.style.setProperty('--drift', drift);
      star.style.animationDuration = (Math.random() * 1.8 + 1.4) + 's';
      star.style.animationDelay = (Math.random() * 0.3) + 's';
      container.appendChild(star);
      setTimeout(() => star.remove(), 2600);
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Ferme toutes les lettres au chargement
  document.querySelectorAll('.tab-content .content-box').forEach(box => {
    box.classList.remove('open');
  });

  // Clic sur le titre => ouvre/ferme uniquement la lettre correspondante
  document.querySelectorAll('.tab-content .content-box > h3').forEach(title => {
    title.setAttribute('role', 'button');
    title.setAttribute('tabindex', '0');
    title.setAttribute('aria-expanded', 'false');

    const toggle = () => {
      const box = title.parentElement;
      const isOpen = box.classList.toggle('open');
      title.setAttribute('aria-expanded', String(isOpen));
    };

    title.addEventListener('click', toggle);
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const roots = document.querySelectorAll('[data-borea-root]');
  if (!roots.length) return;

  const normalize = s => (s||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/\s+/g,' ').trim();

  roots.forEach(root => {
    const form    = root.querySelector('.borea-quiz');
    const input   = root.querySelector('.borea-input');
    const fb      = root.querySelector('.borea-feedback');
    const title   = root.querySelector('[data-borea-title]');
    const panel   = root.querySelector('[data-borea-panel]');

    if (!form || !input || !title || !panel) return;

    // 1) Quiz -> si correct : on montre SEULEMENT le titre
    const answers = (form.dataset.answers||'').split('|').map(s=>s.trim()).filter(Boolean);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = answers.some(a => normalize(a) === normalize(input.value));
      if (ok){
        fb.textContent = '';
        form.style.display = 'none';
        title.style.display = 'block';
        title.focus({preventScroll:true});
      } else {
        fb.textContent = 'Presque… essaie encore 🌙';
        input.focus(); input.select();
      }
    });

    // 2) Toggle animé (height de 0 -> scrollHeight, puis auto)
    let animating = false;
    const openPanel = () => {
      if (animating) return; animating = true;
      panel.style.transition = 'none';
      panel.style.height = '0px';
      panel.style.opacity = '0';
      // forcer un reflow
      void panel.offsetHeight;
      const target = panel.scrollHeight + 'px';
      panel.style.transition = 'height .55s ease, opacity .45s ease';
      panel.style.height = target;
      panel.style.opacity = '1';
      const onEnd = (ev) => {
        if (ev.propertyName !== 'height') return;
        panel.style.transition = '';
        panel.style.height = 'auto';    // libère la hauteur pour contenu long
        panel.removeEventListener('transitionend', onEnd);
        animating = false;
      };
      panel.addEventListener('transitionend', onEnd);
    };

    const closePanel = () => {
      if (animating) return; animating = true;
      // repasser de auto -> px pour pouvoir animer vers 0
      panel.style.height = panel.scrollHeight + 'px';
      panel.style.opacity = '1';
      void panel.offsetHeight;
      panel.style.transition = 'height .45s ease, opacity .35s ease';
      panel.style.height = '0px';
      panel.style.opacity = '0';
      const onEnd = (ev) => {
        if (ev.propertyName !== 'height') return;
        panel.style.transition = '';
        panel.removeEventListener('transitionend', onEnd);
        animating = false;
      };
      panel.addEventListener('transitionend', onEnd);
    };

    const togglePanel = () => {
      const expanded = title.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        title.setAttribute('aria-expanded','false');
        closePanel();
      } else {
        title.setAttribute('aria-expanded','true');
        openPanel();
      }
    };

    title.addEventListener('click', togglePanel);
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePanel(); }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const answerAdieu = document.getElementById("answer-adieu");
  const checkAdieu = document.getElementById("check-adieu");
  const titleContainerAdieu = document.getElementById("adieu-title-container");
  const toggleAdieu = document.getElementById("toggle-adieu");
  const adieuContent = document.getElementById("adieu-content");

  // Vérifie la réponse du quiz
  if (checkAdieu) {
    checkAdieu.addEventListener("click", () => {
      if (answerAdieu.value.trim().toLowerCase() === "paméla" || answerAdieu.value.trim().toLowerCase() === "pamela") {
        titleContainerAdieu.style.display = "block";
      } else {
        alert("Mauvaise réponse… essaie encore !");
      }
    });
  }

  // Toggle du texte au clic sur le titre
  if (toggleAdieu) {
    toggleAdieu.addEventListener("click", () => {
      adieuContent.style.display = adieuContent.style.display === "block" ? "none" : "block";
    });
  }
});

function toggleSouvenirs() {
    const section = document.getElementById("souvenirs-pamela");
    section.classList.toggle("visible");
}






