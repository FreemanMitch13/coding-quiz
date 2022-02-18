var gameInfo = document.getElementById("infoCard");
var questionOne = document.getElementById("cardOne");
var questionTwo = document.getElementById("cardTwo");
var questionThree = document.getElementById("cardThree");
var questionFour = document.getElementById("cardFour");
var questionFive = document.getElementById("cardFive");
var gameOver = document.getElementById("gameOver");
var startBtn = document.getElementById("startQuiz");
var timerEl= document.getElementById("timer");

var correctAnswer1= document.getElementById("q1b");
var correctAnswer2= document.getElementById("q2c");
var correctAnswer3= document.getElementById("q3b");
var correctAnswer4= document.getElementById("q4a");
var correctAnswer5= document.getElementById("q5d");

var spanOne= document.getElementById("q1Message");
var spanTwo= document.getElementById("q2Message");
var spanThree= document.getElementById("q3Message");
var spanFour= document.getElementById("q4Message");
var spanFive= document.getElementById("q5Message");

var secondsLeft = 70;
timerEl.textContent = "Time: " + secondsLeft;
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

startBtn.addEventListener("click", showQuestion1);

function showQuestion1() {
    setTime();    
    questionOne.style.display = "block";
    if (questionOne.style.display === "block") {
        gameInfo.style.display = "none";
    }
};

var q1buttons = document.querySelectorAll('button[id^=q1]');
console.log(q1buttons.length);
console.log(q1buttons);
console.log(q1buttons[1]);

function correctMessage(){
    spanOne.innerHTML= "That is Correct!";   
}
function incorrectMessage(){
    spanOne.innerHTML= "Sorry, that's incorrect.";
}
function checkAnswer(){
    console.log(q1buttons[1].clicked);
    if(q1buttons[1].clicked == true){
        correctMessage();
    }else{
        incorrectMessage();
    }
    // setTimeout(showQuestion2, 1000);
}

for (var i=0; i<q1buttons.length; i++){
    q1buttons[i].addEventListener("click",checkAnswer)
}


function showQuestion2() {
    questionTwo.style.display = "block";
    if (questionTwo.style.display === "block") {
        questionOne.style.display = "none";
    }
    console.log("question2 is working")
};

questionTwo.addEventListener("click", showQuestion3);
function showQuestion3() {
    questionThree.style.display = "block";
    if (questionThree.style.display === "block") {
        questionTwo.style.display = "none";
    }
};

questionThree.addEventListener("click", showQuestion4);
function showQuestion4() {
    questionFour.style.display = "block";
    if (questionFour.style.display === "block") {
        questionThree.style.display = "none";
    }
};
questionFour.addEventListener("click", showQuestion5);
function showQuestion5() {
    questionFive.style.display = "block";
    if (questionFive.style.display === "block") {
        questionFour.style.display = "none";
    }
};
questionFive.addEventListener("click", showGameover);
function showGameover() {
    gameOver.style.display = "block";
    if (gameOver.style.display === "block") {
        questionFive.style.display = "none";
    }
    document.getElementById("finalScore").innerHTML = secondsLeft;
};

