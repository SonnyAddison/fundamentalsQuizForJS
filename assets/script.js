const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex; 


startButton.addEventListener("click", startGame);


function startGame() {
    console.log('started');
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion ()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
function selectAnswer(event) {
    const selectButton = event.target;
    const correct = selectButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1);
    else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }
    else  {
        element.classList.add("wrong")
    } 
}       

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}


const questions = [
    {
        question: "Math.random(x) returns a whole number between?",
        answers: [
            { text: "-1 and x-1", corrrect: false},
            { text: "0 and x-2", correct: false},
            { text: "0 and x-0", correct: false},
            { text: "0 and x-1", correct: true},
        ]
    },
    {
        question: "JavaScript is",
        answers: [
            { text: "double-threaded", correct: false},
            { text: "dynamic language", correct: true},
            { text: "non-supporting", correct: false},
            { text: "gadget-oriented", correct: false},
        ]
    },
    {
        question: "A variable is a container for a?",
        answers: [
            { text: "value", correct: true},
            { text: "name", correct: false},
            { text: "place", correct: false},
            { text: "container", correct: false},
        ]
    },
    {
        question: "To help stop hoisting JavaScript prefers the use of what instead of var?",
        answers: [
            { text: "help", correct: false},
            { text: "hoisting", correct: false},
            { text: "let", correct: true},
            { text: "const", correct: false},
        ]
    },
    {
        question: "True of False: a const can be changed through reassignment?",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ]
    },
    {
        question: "True or False: const, let, var are all used the same way?",
        answers: [
            { text: "True", correct: false},
            { text: "True", correct: true},
        ]
    },
    {
        quesiton: "How many Primitive Values are there in JavaScritp?",
        answers: [
            { text: "7", correct: true},
            { text: "6", correct: false},
            { text: "8", correct: false},
            { text: "15", correct: false},
        ]
    },
    {
        question: "Objects are a Primitive Value?",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ]
    },
    {
        quesiton: "NaN stands for?",
        answers: [
            { text: "Now and Null", correct: false},
            { text: "Null and Null", correct: false},
            { text: "Not a Numberical", correct: false},
            { text: "Not a Number", correct: false},
        ]
    },
    {
        question: "In JavaScript, closures are created/needed every time a function is created?",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false,}
        ]
    }.

]
   


<section id='quest10'>
    <h1>In JavaScript, closures are created/needed every time a function is created?</h1>
    <button>True</button>
    <button>False</button>
</section>
<section id='quest11'>
    <h1>Arguments are/is an Array-like objet that is accessible inside what?</h1>
    <button>arrays</button>
    <button>features</button>
    <button>elements</button>
    <button>functions</button> */