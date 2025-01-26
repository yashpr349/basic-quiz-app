var questions = {
    1: {
        question: "What is the capital of France?",
        answers: {
            1: "Paris",
            2: "London",
            3: "Berlin",
            4: "Madrid"
        },
        correct: "Paris"
    },
    2: {
        question: "What is 2 + 2?",
        answers: {
            1: "3",
            2: "4",
            3: "5",
            4: "6"
        },
        correct: "4"
    },
    3: {
        question: "What is the color of the sky?",
        answers: {
            1: "Blue",
            2: "Green",
            3: "Red",
            4: "Yellow"
        },
        correct: "Blue"
    },
    4: {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            1: "William Shakespeare",
            2: "Charles Dickens",
            3: "Jane Austen",
            4: "Mark Twain"
        },
        correct: "William Shakespeare"
    },
    5: {
        question: "What is the largest planet in our solar system?",
        answers: {
            1: "Earth",
            2: "Mars",
            3: "Jupiter",
            4: "Saturn"
        },
        correct: "Jupiter"
    },
    6: {
        question: "What is the boiling point of water in Celsius?",
        answers: {
            1: "90",
            2: "100",
            3: "110",
            4: "120"
        },
        correct: "100"
    },
    7: {
        question: "What is the chemical symbol for gold?",
        answers: {
            1: "Go",
            2: "Au",
            3: "Ag",
            4: "Gd"
        },
        correct: "Au"
    },
    8: {
        question: "What is the smallest prime number?",
        answers: {
            1: "0",
            2: "1",
            3: "2",
            4: "3"
        },
        correct: "2"
    },
    9: {
        question: "Who is known as the father of computers?",
        answers: {
            1: "Alan Turing",
            2: "Charles Babbage",
            3: "John von Neumann",
            4: "Ada Lovelace"
        },
        correct: "Charles Babbage"
    },
    10: {
        question: "What is the largest ocean on Earth?",
        answers: {
            1: "Atlantic Ocean",
            2: "Indian Ocean",
            3: "Pacific Ocean",
            4: "Arctic Ocean"
        },
        correct: "Pacific Ocean"
    }
};

var score = 0;
var wrongAnswers = 0;
var currentQuestion = 1;
var totalQuestions = Object.keys(questions).length;

function select(option) {
    let questionObj = questions[currentQuestion];

    if (option === questionObj.correct) {
        score++;
        updateCorrectProgress();
    } else {
        wrongAnswers++;
        updateIncorrectProgress();
    }

    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function updateCorrectProgress() {
    let correctProgress = (score / totalQuestions) * 100;
    document.getElementById("correct-progress-bar").style.width = correctProgress + "%";
    document.getElementById("correct-progress-bar").innerText = Math.round(correctProgress) + "%";
}

function updateIncorrectProgress() {
    let incorrectProgress = (wrongAnswers / totalQuestions) * 100;
    document.getElementById("incorrect-progress-bar").style.width = incorrectProgress + "%";
    document.getElementById("incorrect-progress-bar").innerText = Math.round(incorrectProgress) + "%";
}

function loadQuestion() {
    let questionObj = questions[currentQuestion];

    document.getElementById("question").innerText = questionObj.question;
    document.getElementById("option1").innerText = questionObj.answers[1];
    document.getElementById("option2").innerText = questionObj.answers[2];
    document.getElementById("option3").innerText = questionObj.answers[3];
    document.getElementById("option4").innerText = questionObj.answers[4];

    gsap.fromTo(
        "#quetion_div",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
    );
}

function endQuiz() {
    document.getElementById("quetion_div").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${totalQuestions}</p>
    `;
    gsap.fromTo(
        "#quetion_div",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
    );
}

function submit() {
    var name = document.getElementById("name").value;

    if (!name.trim()) {
        alert("Please enter your name to start the quiz.");
        return;
    }

    document.getElementById("container").style.display = "none";
    document.getElementById("name_p").innerText = `PLAYER: ${name}`;
    document.getElementById("name_p").style.opacity = "1";

    loadQuestion();
}
