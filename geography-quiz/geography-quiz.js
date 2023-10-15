let next = document.querySelector(".Next");
let response1 = document.querySelector("#response1");
let response2 = document.querySelector("#response2");
let response3 = document.querySelector("#response3");
let response4 = document.querySelector("#response4");
let question = document.querySelector("#question");
let count = document.querySelector(".count");
const homebtn = document.querySelector(".home-btn");
const backbtn = document.querySelector(".back-button");
const answerButtons = document.querySelectorAll(".answer-btn");
let correct = document.querySelector(".correct");
let incorrect = document.querySelector(".incorrect");
let canvas = document.createElement("canvas");
let gren = document.querySelector(".gren");
let reed = document.querySelector(".reed");
let score = 0;
let index = 0;
let buttonClicked = false;
let buttonsDisabled = false;
let currentCorrectAnswer;

homebtn.onclick = function () {
  location.href = "../index.html";
};

function answerBtn() {
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!buttonsDisabled) {
        if (button === currentCorrectAnswer) {
          if (!button.classList.contains("clicked")) {
            score++;
            button.classList.add("gren");
            button.classList.add("clicked");
            console.log(score);
          }
          button.classList.remove("hover");
        } else {
          button.classList.add("reed");
          currentCorrectAnswer.classList.add("gren");
        }
        buttonsDisabled = true;
      }
    });
  });
}

backbtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  }
  if (index === 0) {
    question1();
  } else if (index === 1) {
    question2();
  } else if (index === 2) {
    question3();
  } else if (index === 3) {
    question4();
  } else if (index === 4) {
    question5();
  } else if (index === 5) {
    question6();
  } else if (index === 6) {
    question7();
  } else if (index === 7) {
    question8();
  } else if (index === 8) {
    question9();
  } else if (index === 9) {
    question10();
  }
  console.log(index);
});

next.addEventListener("click", () => {
  if (index === 0) {
    buttonsDisabled = false;
    question2();
    index++;
  } else if (index === 1) {
    buttonsDisabled = false;
    question3();
    index++;
  } else if (index === 2) {
    buttonsDisabled = false;
    question4();
    index++;
  } else if (index === 3) {
    buttonsDisabled = false;
    question5();
    index++;
  } else if (index === 4) {
    buttonsDisabled = false;
    question6();
    index++;
  } else if (index === 5) {
    buttonsDisabled = false;
    question7();
    index++;
  } else if (index === 6) {
    buttonsDisabled = false;
    question8();
    index++;
  } else if (index === 7) {
    buttonsDisabled = false;
    question9();
    index++;
  } else if (index === 8) {
    buttonsDisabled = false;
    question10();

    index++;
  } else if (index === 9) {
    buttonsDisabled = false;
    endGame();
  }
});

function question1() {
  answerBtn();

  count.textContent = "1/10";
  question.textContent = "What is the longest river in the world?";
  response1.textContent = "Amazon";
  response1.className = "incorrect";
  response2.textContent = "Volga";
  response2.className = "incorrect";
  response3.textContent = "Nile";
  response3.className = "correct";
  response4.textContent = "Mississippi";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}

function question2() {
  answerBtn();

  count.textContent = "2/10";
  question.textContent = "Which states does the United States border?";
  response1.textContent = "Mexico and Canada";
  response1.className = "correct";
  response2.textContent = "Mexico and Iceland";
  response2.className = "incorrect";
  response3.textContent = "Canada and Ontario ";
  response3.className = "incorrect";
  response4.textContent = "Mexico and Rusia ";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question3() {
  answerBtn();

  count.textContent = "3/10";
  question.textContent = "How many continents are there on earth?";
  response1.textContent = "7";
  response1.className = "correct";
  response2.textContent = "4";
  response2.className = "incorrect";
  response3.textContent = "6";
  response3.className = "incorrect";
  response4.textContent = "5";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question4() {
  answerBtn();

  count.textContent = "4/10";
  question.textContent =
    "How many states does the United States of America have?";
  response1.textContent = "40";
  response1.className = "incorrect";
  response2.textContent = "51";
  response2.className = "incorrect";
  response3.textContent = "50";
  response3.className = "correct";
  response4.textContent = "49";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}
function question5() {
  answerBtn();

  count.textContent = "5/10";
  question.textContent =
    "Do you know which continent Fiji and Papua New Guinea are on?";
  response1.textContent = "South America";
  response1.className = "incorrect";
  response2.textContent = "Asia";
  response2.className = "incorrect";
  response3.textContent = "Oceania (Australia)";
  response3.className = "correct";
  response4.textContent = "North America";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}
function question6() {
  answerBtn();

  count.textContent = "6/10";
  question.textContent = "What is the capital of Iceland?";
  response1.textContent = "Akureyri";
  response1.className = "incorrect";
  response2.textContent = "Helsinki";
  response2.className = "incorrect";
  response3.textContent = "Oslo";
  response3.className = "incorrect";
  response4.textContent = "Reykjavik";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question7() {
  answerBtn();

  count.textContent = "7/10";
  question.textContent = "What is the highest waterfall in the world?";
  response1.textContent = "Niagara Falls";
  response1.className = "incorrect";
  response2.textContent = "Yosemite Falls";
  response2.className = "incorrect";
  response3.textContent = "Angel Falls";
  response3.className = "correct";
  response4.textContent = "Gullfoss, Iceland";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}
function question8() {
  answerBtn();

  count.textContent = "8/10";
  question.textContent = "Which is the largest continent by area? ";
  response1.textContent = "Asia";
  response1.className = "correct";
  response2.textContent = "Antarctica";
  response2.className = "incorrect";
  response3.textContent = "North America";
  response3.className = "incorrect";
  response4.textContent = "Africa";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question9() {
  answerBtn();

  count.textContent = "9/10";
  question.textContent =
    "Do you know, roughly the equatorial circumference of Earth?";
  response1.textContent = "15,000 km";
  response1.className = "incorrect";
  response2.textContent = "55,000 km";
  response2.className = "incorrect";
  response3.textContent = "70,000 km";
  response3.className = "incorrect";
  response4.textContent = "40,000 km";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question10() {
  answerBtn();

  count.textContent = "10/10";
  question.textContent =
    "Do you know the name and location of the world’s deepest lake?";
  response1.textContent = "Baikal, Russia";
  response1.className = "correct";
  response2.textContent = "Vostok, Antartica";
  response2.className = "incorrect";
  response3.textContent = "Issyk-Kul, Kyrgyzstan";
  response3.className = "incorrect";
  response4.textContent = "Tanganyika, Africa";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}

function endGame() {
  next.textContent = "Go Back";
  document.querySelector(".it-quiz").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".bottom-answers").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".back-button").style.cssText +=
    "background-color:#0c4d46";

  if (score <= 5) {
    question.textContent = `Your score is ${score}/10 keep it working!`;
  } else if (score > 5 && score < 10) {
    question.textContent = `Your score is ${score}/10 you did a good job!`;
  } else if (score >= 10) {
    question.textContent = `Your score is 10/10 you are awesome!`;
  }
  deleteChild();
  backbtn.remove();
  count.remove();
  next.remove();
  homebtn.style.cssText += "background-color:#0c4d46";
  confetti();
  fireworks();
}

function deleteChild() {
  var e = document.querySelector("ul");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//----------------- FIREWORKS -----------------
function fireworks() {
  var duration = 2 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
//----------------- FIREWORKS -----------------

question1();
