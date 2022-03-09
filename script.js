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
console.log(q1buttons);
console.log(q1buttons[1]);

q1buttons[0].addEventListener("click", function() {
    spanOne.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q1buttons[1].addEventListener("click", function() {
    spanOne.innerHTML= "That is Correct!";
});
q1buttons[2].addEventListener("click", function() {
    spanOne.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q1buttons[3].addEventListener("click", function() {
    spanOne.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});

document.getElementById("q1Message").addEventListener("click", showQuestion2);

function showQuestion2() {
    questionTwo.style.display = "block";
    if (questionTwo.style.display === "block") {
        questionOne.style.display = "none";
    }
};

var q2buttons = document.querySelectorAll('button[id^=q2]');
console.log(q2buttons);
console.log(q2buttons[2]);

q2buttons[0].addEventListener("click", function() {
    spanTwo.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q2buttons[1].addEventListener("click", function() {
    spanTwo.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q2buttons[2].addEventListener("click", function() {
    spanTwo.innerHTML= "That is Correct!";
});
q2buttons[3].addEventListener("click", function() {
    spanTwo.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});

document.getElementById("q2Message").addEventListener("click", showQuestion3);

function showQuestion3() {
    questionThree.style.display = "block";
    if (questionThree.style.display === "block") {
        questionTwo.style.display = "none";
    }
};

var q3buttons = document.querySelectorAll('button[id^=q3]');
console.log(q3buttons);
console.log(q3buttons[1]);

q3buttons[0].addEventListener("click", function() {
    spanThree.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q3buttons[1].addEventListener("click", function() {
    spanThree.innerHTML= "That is Correct!";
});
q3buttons[2].addEventListener("click", function() {
    spanThree.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q3buttons[3].addEventListener("click", function() {
    spanThree.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});

document.getElementById("q3Message").addEventListener("click", showQuestion4);

function showQuestion4() {
    questionFour.style.display = "block";
    if (questionFour.style.display === "block") {
        questionThree.style.display = "none";
    }
};

var q4buttons = document.querySelectorAll('button[id^=q4]');
console.log(q4buttons);
console.log(q4buttons[0]);

q4buttons[0].addEventListener("click", function() {
    spanFour.innerHTML= "That is Correct!";
});
q4buttons[1].addEventListener("click", function() {
    spanFour.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q4buttons[2].addEventListener("click", function() {
    spanFour.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q4buttons[3].addEventListener("click", function() {
    spanFour.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});

document.getElementById("q4Message").addEventListener("click", showQuestion5);


function showQuestion5() {
    questionFive.style.display = "block";
    if (questionFive.style.display === "block") {
        questionFour.style.display = "none";
    }
};

var q5buttons = document.querySelectorAll('button[id^=q5]');
console.log(q5buttons);
console.log(q5buttons[3]);

q5buttons[0].addEventListener("click", function() {
    spanFive.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q5buttons[1].addEventListener("click", function() {
    spanFive.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q5buttons[2].addEventListener("click", function() {
    spanFive.innerHTML= "Sorry, that's incorrect.";
    secondsLeft = secondsLeft - 10;
});
q5buttons[3].addEventListener("click", function() {
    spanFive.innerHTML= "That is Correct!";
});

document.getElementById("q5Message").addEventListener("click", showGameOver);

function showGameOver() {
    gameOver.style.display = "block";
    if (gameOver.style.display === "block") {
        questionFive.style.display = "none";
    }
     var score = document.getElementById("finalScore").innerHTML = secondsLeft;
     console.log(score);
     localStorage.setItem("score", score);
};

function submitScore() {
    var initials = document.getElementById("userInit").value;
    localStorage.setItem("initials", initials);
}
document.getElementById("submit").addEventListener("click", submitScore);

// var init = localStorage.getItem("initials");
// var hiSco = localStorage.getItem("score");

// function saveScores() {


//     return localStorage.getItem("score");
    

//     // var init = localStorage.getItem("initials");
//     // var hiSco = localStorage.getItem("score");

//     // console.log(init);
//     // console.log(hiSco);
// //     document.getElementById("init").innerHTML = localStorage.initials;
// //     document.getElementById("scoreOne").innerHTML = localStorage.score;
//     console.log(localStorage.score);
//     console.log(localStorage.initials);
// }
// // saveScores();
// // document.getElementById("submit").addEventListener("click", saveScores);