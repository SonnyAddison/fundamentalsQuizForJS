/* Global Elements */
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("questionContainer");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const timeStart = document.getElementById("timer");
const nextPage = document.getElementById("savePage");
const startPage = document.getElementById("startPage");
let scoreDisplay = document.getElementById("finalScore")
const scorePoints = 10
let score = 0;
let  setTime = 45;
timeStart.innerHTML = setTime;
let randomQuestions, currentQuestion; 





/* Setting the start of the game */
function startGame() {
    console.log('started');
    startButton.classList.add("hide");
    answerButtonsElement.classList.remove("hide")
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    score = 0
    const countDown = setInterval(()=>{
        setTime--,
        timeStart.innerHTML = setTime;
        if(setTime < 0 || setTime <1){
            clearInterval(countDown);
        }
    },1000); 
    setNextQuestion()          
}
startButton.addEventListener("click", startGame);

/* Sets the next question to be asked*/
function setNextQuestion() {
    if(questions.length === 0){
        localStorage.setItem("currentScore", score)
    }
    resetState();
    showQuestion(randomQuestions[currentQuestion]);

}
 /*Shows the question */
function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("btn");
        if (answer.correct) {         
            button.dataset.correct = answer.correct;
        }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
    });
}
/* To reset each question */
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
/* Allows each answer button to be selectable, changes by color if correct or wrong, and transitions through 10 questions */
function selectAnswer(event) {
    /* allows for the ability to know which button is selected. */
    const selectButton = event.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(setStatusClass === "correct") {
        increaseScore(scorePoints)
    }
    setTimeout(() => {
        resetState()
        setNextQuestion()
    }, 1000)
        currentQuestion++
    if (randomQuestions.length > currentQuestion + 1);
    else {
        nextPage.classList.remove("hide");
        startPage.classList.add("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");   
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

/* Questions to display */
const questions = [
    {
        question: "Math.random(x) returns a whole number between?",
        answers: [
            { text: "-1 and x-1", correct: false},
            { text: "0 and x-2", correct: false}, 
            { text: "0 and x-0", correct: false},
            { text: "0 and x-1", correct: true},
        ],
        correct: 4,       
    },
    {
        question: "JavaScript is a?",
        answers: [
            { text: "double-threaded", correct: false},
            { text: "dynamic language", correct: true},
            { text: "non-supporting", correct: false},
            { text: "gadget-oriented", correct: false},
        ],
        correct: 2,
    },
    {
        question: "A variable is a container for a?",
        answers: [
            { text: "value", correct: true},
            { text: "name", correct: false}, 
            { text: "place", correct: false},
            { text: "container", correct: false},
        ],
        correct: 1,
    },
    {
        question: "To help stop hoisting JavaScript prefers the use of what instead of var?",
        answers: [
            { text: "help", correct: false},
            { text: "hoisting", correct: false},
            { text: "let", correct: true},
            { text: "const", correct: false},
        ],
        correct: 3, 
    },
    {
        question: "True of False: a const can be changed through reassignment?",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ],
        correct: 2,
    },
    {
        question: "True or False: const, let, var are all used the same way?",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ],
        correct: 2,
    },
    {
        question: "How many Primitive Values are there in JavaScritp?",
        answers: [
            { text: "7", correct: true},
            { text: "6", correct: false},
            { text: "8", correct: false},
            { text: "15",correct: false},
        ],
        correct: 1, 
    },
    {
        question: "Objects are a Primitive Value?",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ],
        correct: 2, 
    },
    {
        question: "NaN stands for?",
        answers: [
            { text: "Now and Null", correct: false},
            { text: "Null and Null", correct: false},
            { text: "Not a Numberical", correct: false},
            { text: "Not a Number", correct: true},
        ],
        correct: 4,
    },
    {
        question: "In JavaScript, closures are created/needed every time a function is created?",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false,}
        ],
        correct: 1, 
    }
]