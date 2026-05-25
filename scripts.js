document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initTabs();
  initBookSummaries();
  initDisabledLinks();
  initLeoTribute();
  initLetters();
  initCarousel();
  initSecretLetter();
  initPamelaQuiz();
  initCoquinQuiz();
  initRevealOnScroll();
});

function initMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (!menuToggle || !menu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menu.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open", "active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

function handleTabClick(event, button) {
  event?.preventDefault();
  const targetId = button?.dataset?.tab;
  if (!targetId) return;

  if (button.dataset.warning === "true") {
    const ok = window.confirm("Cette lettre contient un contenu plus adulte. Continuer ?");
    if (!ok) return;
  }

  document.querySelectorAll(".tab-link").forEach((link) => link.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));

  button.classList.add("active");
  document.getElementById(targetId)?.classList.add("active");
}
window.handleTabClick = handleTabClick;

function initTabs() {
  document.querySelectorAll(".tab-link").forEach((button) => {
    button.addEventListener("click", (event) => handleTabClick(event, button));
  });
}

function initBookSummaries() {
  document.querySelectorAll('[id^="book-summary"]').forEach((summary) => {
    summary.setAttribute("tabindex", "0");
    summary.addEventListener("click", () => summary.classList.toggle("active"));
    summary.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        summary.classList.toggle("active");
      }
    });
  });
}

function initDisabledLinks() {
  document.querySelectorAll(".disabled-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Ce livre n'est pas encore disponible. Restez à l'affût !");
    });
  });
}

function initLeoTribute() {
  const imgLeo = document.getElementById("leo-toggle");
  const texteLeo = document.querySelector(".hommage-texte");
  if (!imgLeo || !texteLeo) return;

  imgLeo.setAttribute("tabindex", "0");
  imgLeo.setAttribute("role", "button");
  imgLeo.setAttribute("aria-expanded", "false");

  const toggle = () => {
    const isVisible = texteLeo.style.display === "block";
    texteLeo.style.display = isVisible ? "none" : "block";
    imgLeo.setAttribute("aria-expanded", String(!isVisible));
  };

  imgLeo.addEventListener("click", toggle);
  imgLeo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
}

function initLetters() {
  document.querySelectorAll(".toggle-letter, #toggle-lettre, #toggle-lettre-1, #toggle-lettre-2").forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      if (!content) return;
      const isOpen = content.style.display === "block" || !content.classList.contains("hidden");
      content.style.display = isOpen ? "none" : "block";
      content.classList.toggle("hidden", isOpen);
      if (!isOpen) launchHearts(title);
    });
  });

  document.querySelectorAll(".love-letter-title").forEach((title) => {
    title.addEventListener("click", () => {
      title.nextElementSibling?.classList.toggle("open");
    });
  });

  document.querySelectorAll(".toggle-tree, .pamela-tree-title").forEach((title) => {
    title.addEventListener("click", () => {
      title.closest(".pamela-tree-container")?.classList.toggle("open");
    });
  });

  const astroTitle = document.getElementById("toggle-astro");
  const astroContent = document.querySelector(".astro-content");
  astroTitle?.addEventListener("click", () => {
    if (!astroContent) return;
    astroContent.style.display = astroContent.style.display === "block" ? "none" : "block";
  });
}

function launchHearts(sourceElement) {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.animationDelay = `${Math.random() * 0.4}s`;
    sourceElement.appendChild(heart);
    window.setTimeout(() => heart.remove(), 1600);
  }
}

function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (!carousel || !slides.length || !prevBtn || !nextBtn) return;

  let index = 0;
  let autoSlide = null;

  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };
  const nextSlide = () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  };
  const prevSlide = () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  };
  const startAutoSlide = () => {
    window.clearInterval(autoSlide);
    autoSlide = window.setInterval(nextSlide, 4200);
  };
  const stopAutoSlide = () => window.clearInterval(autoSlide);

  prevBtn.addEventListener("click", () => { prevSlide(); startAutoSlide(); });
  nextBtn.addEventListener("click", () => { nextSlide(); startAutoSlide(); });
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  let startX = 0;
  carousel.addEventListener("touchstart", (event) => { startX = event.touches[0].clientX; }, { passive: true });
  carousel.addEventListener("touchend", (event) => {
    const diff = startX - event.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    startAutoSlide();
  }, { passive: true });

  updateCarousel();
  startAutoSlide();
}

function initSecretLetter() {
  const passwordInput = document.getElementById("secret-password");
  const validateBtn = document.getElementById("validate-password");
  const letter = document.getElementById("secret-letter");
  const errorMsg = document.getElementById("password-error");
  const prompt = document.getElementById("password-prompt");
  const correctPassword = "artemis";

  validateBtn?.addEventListener("click", () => {
    if (!passwordInput || !letter || !prompt || !errorMsg) return;
    if (passwordInput.value.trim().toLowerCase() === correctPassword) {
      prompt.classList.add("fade-out");
      window.setTimeout(() => {
        prompt.style.display = "none";
        letter.classList.add("reveal");
      }, 600);
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Mot de passe incorrect.";
      letter.classList.remove("reveal");
    }
  });
}

function initPamelaQuiz() {
  initStaticQuiz({
    toggleId: "toggle-pamela",
    sectionId: "quiz-pamela",
    formId: "pamela-quiz-form",
    resultId: "quiz-pamela-result",
    messages: [
      { min: 18, text: "🌟 {score}/20 – Tu me connais par cœur !" },
      { min: 14, text: "😊 {score}/20 – Pas mal du tout !" },
      { min: 0, text: "😅 {score}/20 – On va devoir se redécouvrir !" }
    ]
  });
}

function initCoquinQuiz() {
  initStaticQuiz({
    toggleId: "toggle-coquin",
    sectionId: "quiz-coquin",
    formId: "coquin-quiz-form",
    resultId: "quiz-coquin-result",
    messages: [
      { min: 18, text: "🔥 {score}/20 – Tu connais très bien cette mission." },
      { min: 14, text: "💋 {score}/20 – Belle traversée." },
      { min: 10, text: "😉 {score}/20 – Le cap reste correct." },
      { min: 0, text: "🤭 {score}/20 – Il faudra reprendre la carte." }
    ]
  });
}

function initStaticQuiz({ toggleId, sectionId, formId, resultId, messages }) {
  const toggle = document.getElementById(toggleId);
  const section = document.getElementById(sectionId);
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);

  toggle?.addEventListener("click", () => section?.classList.toggle("hidden"));
  if (!form || !result || !section) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    let answered = 0;

    for (let i = 1; i <= 10; i++) {
      const selected = form.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        score += Number.parseInt(selected.value, 10) || 0;
        answered++;
      }
    }

    if (answered < 10) {
      result.textContent = `⚠️ Tu dois répondre aux 10 questions (${10 - answered} manquante(s)).`;
      result.style.color = "#ffcc00";
      return;
    }

    const message = messages.find((item) => score >= item.min)?.text || "Score : {score}/20";
    result.textContent = message.replace("{score}", score);
    result.style.color = "";
  });
}

function initRevealOnScroll() {
  const revealItems = document.querySelectorAll("section, .book-item, .content-box, .quiz-shell");
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add("reveal-ready");
    observer.observe(item);
  });
}
