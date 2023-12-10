// DOM elements
var questionsEl = document.querySelector("#questions");
var optionsEl = document.querySelector("#options");
var timerEl = document.querySelector("#timer");
var startBtn = document.getElementById("start-button");
var restartBtn = document.querySelector("#restart");
var nameEl = document.querySelector("#name");


// Questions
var questions = [

    {
        prompt: 'Commonly used data types DO NOT include:',

        options: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        answer: ["alert"],
    },

    {
        prompt: 'The condition in an if/else statement is enclosed within__:',

        options: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        answer: ["parentheses"],
    },

    {
        prompt: 'Arrays in JavaScript can be used to store__:',

        options: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: ["all of the above"],
    },

    {
        prompt: 'String values must be enclosed within __ when being assigned to variables.',

        options: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        answer: ["quotes"],
    },

    {
        prompt: 'A very useful tool used during development and debugging for printing content to the debugger is:',

        options: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        answer: ["console.log"],
    },

];

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


document.getElementById("question-one").onclick = function() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById('question-two').style.display = "flex";
}

document.getElementById("question-two").onclick = function() {
    document.getElementById("question-two").style.display = "none";
    document.getElementById('question-three').style.display = "flex";
}

document.getElementById("question-three").onclick = function() {
    document.getElementById("question-three").style.display = "none";
    document.getElementById('question-four').style.display = "flex";
}

document.getElementById("question-four").onclick = function() {
    document.getElementById("question-four").style.display = "none";
    document.getElementById('question-five').style.display = "flex";
}

document.getElementById("question-five").onclick = function() {
    document.getElementById("question-five").style.display = "none";
    document.getElementById('hide').style.display = "flex";
}

document.getElementById("hide").onclick = function() {
    document.getElementById("hide").style.display = "none";
    document.getElementById('highscores-div').style.display = "flex";
}


document.getElementById("start-button").addEventListener("click", function(){
    var timeleft = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("time-left").innerHTML = timeleft + 
    "&nbsp"+"s";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("time-left").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});