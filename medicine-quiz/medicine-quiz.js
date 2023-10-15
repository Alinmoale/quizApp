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
  question.textContent = "What is the longest bone in the human body?";
  response1.textContent = "humerus";
  response1.className = "incorrect";
  response2.textContent = "femur";
  response2.className = "correct";
  response3.textContent = "breastbone";
  response3.className = "incorrect";
  response4.textContent = "leg bone";
  response4.className = "incorrect";
  currentCorrectAnswer = response2;
}

function question2() {
  answerBtn();

  count.textContent = "2/10";
  question.textContent = "In what part of the body is the zygomatic bone?";
  response1.textContent = "face";
  response1.className = "correct";
  response2.textContent = "back";
  response2.className = "incorrect";
  response3.textContent = "thorax";
  response3.className = "incorrect";
  response4.textContent = "legs";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question3() {
  answerBtn();

  count.textContent = "3/10";
  question.textContent = "What is the largest blood vessel in the human body?";
  response1.textContent = "aorta artery";
  response1.className = "correct";
  response2.textContent = "pulmonary artery";
  response2.className = "incorrect";
  response3.textContent = "vena cava";
  response3.className = "incorrect";
  response4.textContent = "femoral artery";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question4() {
  answerBtn();

  count.textContent = "4/10";
  question.textContent = "How many pairs of ribs does a human have?";
  response1.textContent = "14";
  response1.className = "incorrect";
  response2.textContent = "12";
  response2.className = "correct";
  response3.textContent = "8";
  response3.className = "incorrect";
  response4.textContent = "10";
  response4.className = "incorrect";
  currentCorrectAnswer = response2;
}
function question5() {
  answerBtn();

  count.textContent = "5/10";
  question.textContent = "Hemophilia is a disease of...";
  response1.textContent = "the tissue";
  response1.className = "incorrect";
  response2.textContent = "bones";
  response2.className = "incorrect";
  response3.textContent = "blood";
  response3.className = "correct";
  response4.textContent = "muscles";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}
function question6() {
  answerBtn();

  count.textContent = "6/10";
  question.textContent = "What are white blood cells called?";
  response1.textContent = "erythrocytes";
  response1.className = "incorrect";
  response2.textContent = "leukocyte";
  response2.className = "correct";
  response3.textContent = "thrombocytes";
  response3.className = "incorrect";
  response4.textContent = "lymphocytes";
  response4.className = "incorrect";
  currentCorrectAnswer = response2;
}
function question7() {
  answerBtn();

  count.textContent = "7/10";
  question.textContent = "How many chambers does the heart have?";
  response1.textContent = "2";
  response1.className = "incorrect";
  response2.textContent = "3";
  response2.className = "incorrect";
  response3.textContent = "6";
  response3.className = "incorrect";
  response4.textContent = "4";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question8() {
  answerBtn();

  count.textContent = "8/10";
  question.textContent = "What is the strongest muscle compared to its size? ";
  response1.textContent = "trapeze";
  response1.className = "incorrect";
  response2.textContent = "biceps";
  response2.className = "incorrect";
  response3.textContent = "sartorius";
  response3.className = "incorrect";
  response4.textContent = "tongue";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question9() {
  answerBtn();

  count.textContent = "9/10";
  question.textContent = "In what part of the body is the epiglottis located?";
  response1.textContent = "neck";
  response1.className = "correct";
  response2.textContent = "stomach";
  response2.className = "incorrect";
  response3.textContent = "head";
  response3.className = "incorrect";
  response4.textContent = "thorax";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question10() {
  answerBtn();

  count.textContent = "10/10";
  question.textContent = "What is the name of the heart muscle?";
  response1.textContent = "pericardium";
  response1.className = "incorrect";
  response2.textContent = "epicardium";
  response2.className = "incorrect";
  response3.textContent = "endocardium";
  response3.className = "incorrect";
  response4.textContent = "myocardium";
  response4.className = "correct";
  currentCorrectAnswer = response4;
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
