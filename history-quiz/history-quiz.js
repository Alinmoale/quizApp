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
  question.textContent = "In which country was Adolf Hitler born?";
  response1.textContent = "Germany";
  response1.className = "incorrect ";
  response2.textContent = "Austria";
  response2.className = "correct";
  response3.textContent = "Italy";
  response3.className = "incorrect";
  response4.textContent = "France";
  response4.className = "incorrect";
  currentCorrectAnswer = response2;
}

function question2() {
  answerBtn();

  count.textContent = "2/10";
  question.textContent = "When did World War I take place?";
  response1.textContent = "1914-1918";
  response1.className = "correct";
  response2.textContent = "1924-1928";
  response2.className = "incorrect";
  response3.textContent = "1910-1920";
  response3.className = "incorrect";
  response4.textContent = "1912-1918";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question3() {
  answerBtn();

  count.textContent = "3/10";
  question.textContent = "What year did Princess Diana die?";
  response1.textContent = "1992";
  response1.className = "incorrect";
  response2.textContent = "2000";
  response2.className = "incorrect";
  response3.textContent = "1987";
  response3.className = "incorrect";
  response4.textContent = "1997";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question4() {
  answerBtn();

  count.textContent = "4/10";
  question.textContent = "What woman discovered radium and polonium?";
  response1.textContent = "Marie Curie";
  response1.className = "correct";
  response2.textContent = "Amelia Earhart";
  response2.className = "incorrect";
  response3.textContent = "Jane Austen";
  response3.className = "incorrect";
  response4.textContent = "Marie Antoinette";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question5() {
  answerBtn();

  count.textContent = "5/10";
  question.textContent = "Who was the Greek God of War?";
  response1.textContent = "Zeus";
  response1.className = "incorrect";
  response2.textContent = "Ares";
  response2.className = "correct";
  response3.textContent = "Poseidon";
  response3.className = "incorrect";
  response4.textContent = "Hermes";
  response4.className = "incorrect";
  currentCorrectAnswer = response2;
}
function question6() {
  answerBtn();

  count.textContent = "6/10";
  question.textContent = "How long did the 100 years war last?";
  response1.textContent = "100";
  response1.className = "incorrect";
  response2.textContent = "99";
  response2.className = "incorrect";
  response3.textContent = "101";
  response3.className = "incorrect";
  response4.textContent = "116";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question7() {
  answerBtn();

  count.textContent = "7/10";
  question.textContent =
    "Who was the first president of the United States of America?";
  response1.textContent = "Benjamin Franklin";
  response1.className = "incorrect";
  response2.textContent = "Theodore Roosevelt";
  response2.className = "incorrect";
  response3.textContent = "John F. Kennedy";
  response3.className = "incorrect";
  response4.textContent = "George Washington";
  response4.className = "correct";
  currentCorrectAnswer = response4;
}
function question8() {
  answerBtn();

  count.textContent = "8/10";
  question.textContent =
    "Who was the leader of the Soviet Union during the Cold War and the Cuban Missile Crisis? ";
  response1.textContent = "Nikita Khrushchev";
  response1.className = "correct";
  response2.textContent = "Joseph Stalin";
  response2.className = "incorrect";
  response3.textContent = "Vladimir Putin";
  response3.className = "incorrect";
  response4.textContent = "Leon Trotsky";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question9() {
  answerBtn();

  count.textContent = "9/10";
  question.textContent = "What is the oldest civilization in the world?";
  response1.textContent = "Mesopotamian Civilization";
  response1.className = "correct";
  response2.textContent = "Egyptian Civilization";
  response2.className = "incorrect";
  response3.textContent = "Norte Chico Civilization";
  response3.className = "incorrect";
  response4.textContent = "Chinese Civilizations";
  response4.className = "incorrect";
  currentCorrectAnswer = response1;
}
function question10() {
  answerBtn();

  count.textContent = "10/10";
  question.textContent = "What is the oldest dynasty still leading?";
  response1.textContent = "Egyptian";
  response1.className = "incorrect";
  response2.textContent = "Turkey ";
  response2.className = "incorrect";
  response3.textContent = "Japan";
  response3.className = "correct";
  response4.textContent = "Mauryan";
  response4.className = "incorrect";
  currentCorrectAnswer = response3;
}

function endGame() {
  next.textContent = "Go Back";
  document.querySelector(".it-quiz").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".bottom-answers").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".back-button").style.cssText +=
    "background-color:#0c4d46";

  // question.textContent = `Your score is ${score}/10 `;
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
