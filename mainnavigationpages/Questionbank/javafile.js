document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("*"); // Select all elements

    // Set initial opacity to 0 for the fade-in effect
    elements.forEach(function(element) {
        element.style.opacity = 0;
    });

    var index = 0;
    var interval = setInterval(function() {
        if (index < elements.length) {
            fadeIn(elements[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 25);

    // Function to apply fade-in effect
    function fadeIn(element) {
        var opacity = 0;
        var interval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 25);
    }

    // Toggle responsive menu (for the hamburger icon)
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var navigation = document.getElementById("menu");
        if (navigation.className === "topnav") {
            navigation.className += " responsive";
        } else {
            navigation.className = "topnav";
        }
    });
});
let questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }
    updateQuestion();
});

function updateQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    const questionElement = document.createElement("p");
    questionElement.className = "question";
    questionElement.textContent = questions[currentQuestionIndex].question;
    questionContainer.appendChild(questionElement);

    const choicesElement = document.createElement("div");
    choicesElement.className = "choices";
    questions[currentQuestionIndex].choices.forEach((choice, index) => {
        const choiceElement = document.createElement("div");
        choiceElement.className = "choice";
        choiceElement.textContent = choice;
        choicesElement.appendChild(choiceElement);
    });
    questionContainer.appendChild(choicesElement);
}

updateQuestion();