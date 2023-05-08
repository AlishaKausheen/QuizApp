const quizData = [{
        question: "First programming language to go for",
        a: "C",
        b: "Java",
        c: "C++",
        d: "Python",
        correct: "a",
    },
    {
        question: "Most used programming language in 2019",
        a: "C",
        b: "Java",
        c: "C++",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Full form of Html is:",
        a: "Height Text Makes Langauge",
        b: "Half Text Maker Language",
        c: "Hyper Text Markup Language",
        d: "Highlighted Text Markup Language",
        correct: "c",
    },
    {
        question: "Oldest programming language",
        a: "Java",
        b: "Fortan",
        c: "Cobal",
        d: "C",
        correct: "b",
    },
    {
        question: "JavaScript invented in:",
        a: "1995",
        b: "1996",
        c: "1997",
        d: "1998",
        correct: "a",

    }
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.querySelector(".quiz-container")
let currentQuestion = 0;
let currentQuiz = 0;
let score = 0;
let answer = undefined;
const answerEls = document.querySelectorAll('.answer');
loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuestion++;
}

function getSelected() {

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });
    return answer;

}

function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = false;

        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {

    answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
            // deSelectAnswers();

        } else {
            quiz.innerHTML = `<h2> You answered correctly  ${score} out of ${quizData.length}</h2> <button onClick="location.reload()">Reload</button>`;
        }
    }
});