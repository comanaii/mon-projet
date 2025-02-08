document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-question");
    const quizContainer = document.querySelector(".quiz-container");
    const scoreContainer = document.createElement("div");
    
    scoreContainer.id = "score-container";
    scoreContainer.style.display = "none";
    quizContainer.after(scoreContainer);

    const questions = [
        { question: "Quelle est la capitale de la France ?", answers: ["Paris", "Londres", "Rome", "Berlin"], correct: 0 },
        { question: "Quelle est la capitale du Japon ?", answers: ["Séoul", "Tokyo", "Pékin", "Bangkok"], correct: 1 },
        { question: "Quelle est la capitale du Brésil ?", answers: ["Buenos Aires", "Brasilia", "Rio de Janeiro", "Lima"], correct: 1 },
        { question: "Quelle est la capitale de l'Australie ?", answers: ["Canberra", "Sydney", "Melbourne", "Perth"], correct: 0 },
        { question: "Quelle est la capitale du Canada ?", answers: ["Ottawa", "Toronto", "Vancouver", "Montréal"], correct: 0 },
        { question: "Quelle est la capitale de l'Allemagne ?", answers: ["Berlin", "Munich", "Hambourg", "Francfort"], correct: 0 },
        { question: "Quelle est la capitale de l'Italie ?", answers: ["Rome", "Milan", "Naples", "Florence"], correct: 0 },
        { question: "Quelle est la capitale de la Russie ?", answers: ["Moscou", "Saint-Pétersbourg", "Kiev", "Minsk"], correct: 0 },
        { question: "Quelle est la capitale des États-Unis ?", answers: ["Washington", "New York", "Los Angeles", "Chicago"], correct: 0 },
        { question: "Quelle est la capitale de l'Espagne ?", answers: ["Madrid", "Barcelone", "Séville", "Valence"], correct: 0 },
        { question: "Quelle est la capitale de la Chine ?", answers: ["Pékin", "Shanghai", "Hong Kong", "Canton"], correct: 0 },
        { question: "Quelle est la capitale de l'Inde ?", answers: ["New Delhi", "Bombay", "Calcutta", "Bangalore"], correct: 0 },
        { question: "Quelle est la capitale du Mexique ?", answers: ["Mexico", "Cancún", "Guadalajara", "Monterrey"], correct: 0 },
        { question: "Quelle est la capitale de la Turquie ?", answers: ["Ankara", "Istanbul", "Izmir", "Bursa"], correct: 0 },
        { question: "Quelle est la capitale de l'Égypte ?", answers: ["Le Caire", "Alexandrie", "Louxor", "Assouan"], correct: 0 },
        { question: "Quelle est la capitale de l'Argentine ?", answers: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"], correct: 0 },
        { question: "Quelle est la capitale de l'Afrique du Sud ?", answers: ["Pretoria", "Le Cap", "Johannesburg", "Durban"], correct: 0 },
        { question: "Quelle est la capitale de la Suède ?", answers: ["Stockholm", "Oslo", "Helsinki", "Copenhague"], correct: 0 },
        { question: "Quelle est la capitale de la Norvège ?", answers: ["Oslo", "Stockholm", "Bergen", "Trondheim"], correct: 0 },
        { question: "Quelle est la capitale de la Grèce ?", answers: ["Athènes", "Thessalonique", "Patras", "Heraklion"], correct: 0 }
    ];

    
    let usedQuestions = [];
    let score = 0;
    let questionCount = 0;
    const totalQuestions = 20;

    function getRandomQuestion() {
        if (questionCount >= totalQuestions) {
            showFinalScore();
            return null;
        }
        let index;
        do {
            index = Math.floor(Math.random() * questions.length);
        } while (usedQuestions.includes(index));
        usedQuestions.push(index);
        questionCount++;
        return questions[index];
    }

    function displayQuestion() {
        const questionData = getRandomQuestion();
        if (!questionData) return;
        
        questionElement.textContent = questionData.question;
        const shuffledAnswers = questionData.answers.map((value, index) => ({ value, index })).sort(() => Math.random() - 0.5);
        
        options.forEach((option, i) => {
            option.textContent = shuffledAnswers[i].value;
            option.dataset.correct = shuffledAnswers[i].index === questionData.correct;
            option.classList.remove("correct", "wrong");
            option.disabled = false;
        });
        feedbackElement.textContent = "";
    }

    options.forEach(option => {
        option.addEventListener("click", () => {
            options.forEach(opt => opt.disabled = true);
            if (option.dataset.correct === "true") {
                option.classList.add("correct");
                feedbackElement.textContent = "Bonne réponse !";
                score++;
            } else {
                option.classList.add("wrong");
                feedbackElement.textContent = "Mauvaise réponse. Essayez la prochaine question.";
            }
        });
    });

    nextButton.addEventListener("click", () => {
        if (questionCount < totalQuestions) {
            options.forEach(opt => opt.disabled = false);
            displayQuestion();
        } else {
            showFinalScore();
        }
    });

    function showFinalScore() {
        quizContainer.style.display = "none";
        scoreContainer.style.display = "block";
        scoreContainer.innerHTML = `<h2>Quiz terminé !</h2>
                                    <p>Votre score final est de ${score} / ${totalQuestions}</p>
                                    <button onclick="location.reload()">Rejouer</button>`;
    }

    displayQuestion();
});

