document.addEventListener("DOMContentLoaded", () => {
  const quizRoot = document.getElementById("quizz");
  const quizContainer = document.querySelector(".quizz-container");
  const stepElement = document.getElementById("quiz-step");
  const liveScoreElement = document.getElementById("quiz-score-live");
  const progressBar = document.getElementById("quiz-progress-bar");

  if (!quizRoot || !quizContainer || !stepElement || !liveScoreElement || !progressBar) return;

  const questions = [
    {
      category: "Mythologie",
      question: "Quel dieu accompagne naturellement l'univers maritime du Comanaï ?",
      answers: ["Poséidon", "Arès", "Hadès", "Dionysos"],
      correct: 0,
      explanation: "Poséidon reste le gardien symbolique des océans, des tempêtes et des traversées."
    },
    {
      category: "Livres",
      question: "Quel est le titre de la première partie des mémoires ?",
      answers: ["Les Prémices", "L'Avènement", "La Fin du Chemin", "Les Sirènes d'Ébène"],
      correct: 0,
      explanation: "Les Prémices raconte les débuts, la jeunesse marine et la naissance du surnom."
    },
    {
      category: "Univers",
      question: "Quel thème revient le plus fortement dans les textes du Comanaï ?",
      answers: ["La fraternité de mer", "La finance", "La cuisine alpine", "La science-fiction spatiale"],
      correct: 0,
      explanation: "La mer, les équipages, la fraternité et les souvenirs de bord sont au cœur du site."
    },
    {
      category: "Style",
      question: "Quelle ambiance doit guider le style graphique du site ?",
      answers: ["Marine, corsaire et mythologique", "Minimaliste blanc médical", "Western désertique", "Cyberpunk rose fluo uniquement"],
      correct: 0,
      explanation: "Le site gagne en identité avec un mélange bleu nuit, or, houle, mythologie et journal de bord."
    },
    {
      category: "Univers",
      question: "Dans l'imaginaire du site, que représente l'océan ?",
      answers: ["Une épreuve et une mémoire", "Un simple décor", "Un menu déroulant", "Une ville"],
      correct: 0,
      explanation: "L'océan porte les souvenirs, les tempêtes, les escales et les renaissances."
    },
    {
      category: "Quiz",
      question: "Quel élément rend le quiz plus immersif ?",
      answers: ["Des explications après chaque réponse", "Supprimer le score", "Cacher les questions", "Mettre toutes les réponses identiques"],
      correct: 0,
      explanation: "Le retour immédiat transforme le quiz en petit récit interactif."
    },
    {
      category: "Symboles",
      question: "Quel symbole convient le mieux à un bouton d'action du Comanaï ?",
      answers: ["Une ancre ou un trident", "Une calculatrice", "Un flocon", "Une clé USB"],
      correct: 0,
      explanation: "Ancre, trident et dorures renforcent immédiatement l'identité marine."
    },
    {
      category: "Livres",
      question: "Quel livre évoque une progression, une montée en puissance ?",
      answers: ["L'Avènement", "Les Prémices", "La Fin du Chemin", "Le Cahier d'Ordinaire"],
      correct: 0,
      explanation: "L'Avènement porte l'idée d'une transformation et d'une affirmation."
    },
    {
      category: "Sécurité",
      question: "Quel choix améliore la sécurité des liens externes ?",
      answers: ["rel=\"noopener noreferrer\"", "target=\"pirate\"", "style=\"secure\"", "href=\"#secret\""],
      correct: 0,
      explanation: "Avec target=_blank, rel=noopener noreferrer évite certains risques liés aux nouveaux onglets."
    },
    {
      category: "Refonte",
      question: "Quel est le meilleur objectif pour cette refonte ?",
      answers: ["Garder l'âme du site en le rendant plus lisible et vivant", "Tout supprimer", "Remplacer la mer par la montagne", "Mettre uniquement du texte brut"],
      correct: 0,
      explanation: "La bonne refonte respecte ton univers et améliore la lisibilité, le rythme et l'expérience."
    },
    {
      category: "Escale",
      question: "Quelle ville est le grand port militaire naturellement associé au départ d'un marin varois ?",
      answers: ["Toulon", "Lyon", "Strasbourg", "Clermont-Ferrand"],
      correct: 0,
      explanation: "Toulon est l'un des grands ports militaires français et colle parfaitement à l'univers du Comanaï."
    },
    {
      category: "Escale",
      question: "Dans les souvenirs du Comanaï, quelle escale évoque l'Afrique de l'Ouest et le poulet Yassa ?",
      answers: ["Dakar", "Reykjavik", "Tokyo", "Oslo"],
      correct: 0,
      explanation: "Dakar fait partie des escales qui respirent la chaleur, les saveurs et les souvenirs de bord."
    },
    {
      category: "Escale",
      question: "Mindelo se situe dans quel archipel souvent visité par les marins ?",
      answers: ["Cap-Vert", "Maldives", "Seychelles", "Baléares"],
      correct: 0,
      explanation: "Mindelo est une escale emblématique du Cap-Vert, parfaite pour un journal de bord maritime."
    },
    {
      category: "Escale",
      question: "Les îles du Salut se trouvent au large de quel territoire français ?",
      answers: ["Guyane", "Bretagne", "Corse", "Nouvelle-Calédonie"],
      correct: 0,
      explanation: "Les îles du Salut sont situées au large de la Guyane, un lieu fort pour une carte des escales."
    },
    {
      category: "Escale",
      question: "Bata est une ville située dans quel pays d'Afrique centrale ?",
      answers: ["Guinée équatoriale", "Sénégal", "Maroc", "Kenya"],
      correct: 0,
      explanation: "Bata se trouve en Guinée équatoriale, sur la façade atlantique de l'Afrique centrale."
    },
    {
      category: "Escale",
      question: "Abidjan est une grande ville portuaire de quel pays ?",
      answers: ["Côte d'Ivoire", "Tunisie", "Portugal", "Madagascar"],
      correct: 0,
      explanation: "Abidjan est une escale majeure de Côte d'Ivoire, avec une vraie puissance portuaire et urbaine."
    },
    {
      category: "Marine",
      question: "Quel navire est mentionné dans l'hommage à Léo ?",
      answers: ["Jean Bart", "Borda", "Hermione", "Calypso"],
      correct: 0,
      explanation: "L'hommage évoque la Frégate Antiaérienne Jean Bart et la fraternité née à bord."
    },
    {
      category: "Livres",
      question: "Dans quel livre l'Atlantique est présenté comme un royaume de Poséidon ?",
      answers: ["L'Avènement", "Les Prémices", "La Fin du Chemin", "Lettre 20"],
      correct: 0,
      explanation: "L'Avènement porte l'idée du grand voyage, des escales et des horizons océaniques."
    },
    {
      category: "Lieux",
      question: "Quelle mer revient naturellement dans les traversées proches de Toulon ?",
      answers: ["Méditerranée", "Mer Baltique", "Mer Noire", "Mer de Barents"],
      correct: 0,
      explanation: "La Méditerranée est le théâtre logique des départs, retours, escales et souvenirs du Sud."
    },
    {
      category: "Journal de bord",
      question: "Quelle fonctionnalité serait idéale pour relier le quiz aux escales ?",
      answers: ["Débloquer des questions depuis une carte", "Supprimer la galerie", "Désactiver les réponses", "Remplacer les images par du texte brut"],
      correct: 0,
      explanation: "Une carte interactive avec questions par port donnerait un vrai côté journal de bord."
    }
  ];

  const totalQuestions = questions.length;
  let deck = [];
  let currentIndex = 0;
  let score = 0;
  let hasAnswered = false;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function buildQuizMarkup() {
    quizContainer.innerHTML = `
      <p id="quiz-category" class="quiz-category">Journal de bord</p>
      <p id="question">Chargement de la question...</p>
      <div class="options">
        <button class="option" type="button" data-index="0"></button>
        <button class="option" type="button" data-index="1"></button>
        <button class="option" type="button" data-index="2"></button>
        <button class="option" type="button" data-index="3"></button>
      </div>
      <p id="feedback"></p>
      <button id="next-question" type="button">Question suivante</button>
    `;
  }

  function getElements() {
    return {
      categoryElement: document.getElementById("quiz-category"),
      questionElement: document.getElementById("question"),
      options: Array.from(document.querySelectorAll(".option")),
      feedbackElement: document.getElementById("feedback"),
      nextButton: document.getElementById("next-question")
    };
  }

  function updateHud() {
    const shownIndex = Math.min(currentIndex + 1, totalQuestions);
    stepElement.textContent = `Question ${shownIndex} / ${totalQuestions}`;
    liveScoreElement.textContent = `Score : ${score}`;
    progressBar.style.width = `${(currentIndex / totalQuestions) * 100}%`;
  }

  function displayQuestion() {
    const { categoryElement, questionElement, options, feedbackElement, nextButton } = getElements();
    if (!questionElement || !options.length || !feedbackElement || !nextButton) return;

    hasAnswered = false;
    const questionData = deck[currentIndex];
    const shuffledAnswers = shuffle(questionData.answers.map((value, index) => ({ value, index })));

    if (categoryElement) categoryElement.textContent = `🧭 ${questionData.category}`;
    questionElement.textContent = questionData.question;
    feedbackElement.textContent = "";
    feedbackElement.className = "";
    nextButton.disabled = true;
    nextButton.textContent = currentIndex === totalQuestions - 1 ? "Voir le rapport final" : "Question suivante";

    options.forEach((option, i) => {
      const item = shuffledAnswers[i];
      option.textContent = item.value;
      option.dataset.correct = String(item.index === questionData.correct);
      option.classList.remove("correct", "wrong", "is-muted");
      option.disabled = false;
      option.setAttribute("aria-pressed", "false");
      option.onclick = () => answer(option);
    });

    nextButton.onclick = nextQuestion;
    updateHud();
  }

  function answer(option) {
    if (hasAnswered) return;
    hasAnswered = true;

    const { options, feedbackElement, nextButton } = getElements();
    const questionData = deck[currentIndex];
    const isCorrect = option.dataset.correct === "true";

    options.forEach((opt) => {
      opt.disabled = true;
      opt.classList.toggle("is-muted", opt !== option && opt.dataset.correct !== "true");
      if (opt.dataset.correct === "true") opt.classList.add("correct");
    });

    option.setAttribute("aria-pressed", "true");

    if (isCorrect) {
      score++;
      feedbackElement.className = "feedback-good";
      feedbackElement.textContent = `✅ Cap tenu. ${questionData.explanation}`;
    } else {
      option.classList.add("wrong");
      feedbackElement.className = "feedback-bad";
      feedbackElement.textContent = `🚨 Mauvaise route. ${questionData.explanation}`;
    }

    liveScoreElement.textContent = `Score : ${score}`;
    nextButton.disabled = false;
  }

  function nextQuestion() {
    if (!hasAnswered) return;
    currentIndex++;
    if (currentIndex >= totalQuestions) showFinalScore();
    else displayQuestion();
  }

  function getRank(value) {
    if (value >= 18) return { title: "Légende du Comanaï", icon: "🔱" };
    if (value >= 15) return { title: "Amiral des mers", icon: "⚓" };
    if (value >= 12) return { title: "Corsaire confirmé", icon: "🏴‍☠️" };
    if (value >= 8) return { title: "Quartier-maître", icon: "🧭" };
    if (value >= 4) return { title: "Matelot prometteur", icon: "🌊" };
    return { title: "Mousse en formation", icon: "🪢" };
  }

  function getFinalMessage(value) {
    if (value >= 18) return "Tu connais les escales, les dieux et les récits comme si tu avais tenu le journal de bord.";
    if (value >= 15) return "Très grande traversée. Le cap est solide et l'équipage peut te suivre.";
    if (value >= 12) return "Belle navigation. Tu as l'âme corsaire et le compas bien réglé.";
    if (value >= 8) return "La route est bonne, mais quelques escales méritent encore d'être explorées.";
    if (value >= 4) return "Tu tiens la barre, mais la carte des mers du Comanaï doit être relue.";
    return "Retour au port : on révise les escales, les livres et la mythologie avant de repartir.";
  }

  function showFinalScore() {
    progressBar.style.width = "100%";
    stepElement.textContent = `Mission terminée`;
    liveScoreElement.textContent = `Score : ${score} / ${totalQuestions}`;

    const rank = getRank(score);
    quizContainer.innerHTML = `
      <div class="quiz-final-card">
        <p class="section-kicker">${rank.icon} Rapport final</p>
        <h3>${rank.title}</h3>
        <p>Score final : <strong>${score} / ${totalQuestions}</strong></p>
        <p>${getFinalMessage(score)}</p>
        <div class="quiz-rank-scale" aria-label="Échelle des grades">
          <span>Mousse</span><span>Quartier-maître</span><span>Corsaire</span><span>Amiral</span><span>Légende</span>
        </div>
        <button id="restart-quiz" type="button">Rejouer la mission</button>
      </div>
    `;
    document.getElementById("restart-quiz")?.addEventListener("click", startQuiz);
  }

  function startQuiz() {
    deck = shuffle([...questions]);
    currentIndex = 0;
    score = 0;
    buildQuizMarkup();
    displayQuestion();
  }

  startQuiz();
});
