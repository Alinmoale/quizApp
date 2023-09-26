let next = document.querySelector(".Next");
let response1 = document.querySelector("#response1");
let response2 = document.querySelector("#response2");
let response3 = document.querySelector("#response3");
let response4 = document.querySelector("#response4");
let question = document.querySelector("#question");
let count = document.querySelector(".count");
let index = 0;
let score = 0;
let buttonClicked = false;
const homebtn = document.querySelector(".home-btn");
const backbtn = document.querySelector(".back-button");
const answerButtons = document.querySelectorAll(".answer-btn");
let correct = document.querySelector(".correct");
let canvas = document.createElement("canvas");

homebtn.onclick = function () {
  location.href = "main.html";
};

let buttonsDisabled = false;
function answerBtn() {
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!buttonsDisabled) {
        if (button.classList.contains("correct")) {
          if (!button.classList.contains("clicked")) {
            score++;
            button.classList.add("clicked");
            console.log(score);
          }
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
  question.textContent = "What was the first mouse made of ?";
  response1.textContent = "wood";
  response1.className = "correct";
  response2.textContent = "iron";
  response2.className = "incorrect";
  response3.textContent = "plastic";
  response4.textContent = "aluminium";
}

function question2() {
  answerBtn();

  count.textContent = "2/10";
  question.textContent = "Who was the first computer programmer?";
  response1.textContent = "Alan Turing";
  response1.className = "incorrect";
  response2.textContent = "Ada Lovelace";
  response2.className = "correct";
  response3.textContent = "Grace Hopper";
  response4.textContent = "Bob Thomas";
}
function question3() {
  {
    answerBtn();

    count.textContent = "3/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Rabbit Virus";
    response2.className = "incorrect";
    response3.textContent = "Creeper program";
    response3.className = "correct";
    response4.textContent = "LoveLetter Virus";
    response4.className = "incorrect";
  }
}
function question4() {
  {
    answerBtn();

    count.textContent = "4/10";
    question.textContent = "What www stands for?";
    response1.textContent = "Wide World Web";
    response1.className = "incorrect";
    response2.textContent = "World Web Wide";
    response2.className = "incorrect";
    response3.textContent = "Web World Wide";
    response3.className = "incorrect";
    response4.textContent = "World Wide Web";
    response4.className = "correct";
  }
}
function question5() {
  {
    answerBtn();

    count.textContent = "5/10";
    question.textContent =
      "What was the first computer that had a colour display?";
    response1.textContent = "iMac";
    response1.className = "incorrect";
    response2.textContent = "Apple II";
    response2.className = "correct";
    response3.textContent = "BBC Micro";
    response3.className = "incorrect";
    response4.textContent = "Amiga 500";
    response4.className = "incorrect";
  }
}
function question6() {
  {
    answerBtn();

    count.textContent = "6/10";
    question.textContent = "What do you call a computer's main circuit board?";
    response1.textContent = "Surfboard";
    response1.className = "incorrect";
    response2.textContent = "Ironing Board";
    response2.className = "incorrect";
    response3.textContent = "Moatherboard";
    response3.className = "correct";
    response4.textContent = "Fatherboard";
    response4.className = "incorrect";
  }
}
function question7() {
  {
    answerBtn();

    count.textContent = "7/10";
    question.textContent = "What does I.T. stand for?";
    response1.textContent = "Internet Technology";
    response1.className = "incorrect";
    response2.textContent = "Information Technology";
    response2.className = "correct";
    response3.textContent = "Irritating Tuxedos";
    response3.className = "incorrect";
    response4.textContent = "Ivanka Trump";
    response4.className = "incorrect";
  }
}
function question8() {
  {
    answerBtn();

    count.textContent = "8/10";
    question.textContent = "Who created the first modern computer? ";
    response1.textContent = "Robert E Kahn";
    response1.className = "incorrect";
    response2.textContent = "Charles Babbage";
    response2.className = "correct";
    response3.textContent = "Bharles Cabbage";
    response3.className = "incorrect";
    response4.textContent = "The Wu Tang Clan";
    response4.className = "incorrect";
  }
}
function question9() {
  {
    answerBtn();

    count.textContent = "9/10";
    question.textContent = "Firefox and Opera are types of what?";
    response1.textContent = "Pokemon";
    response1.className = "incorrect";
    response2.textContent = "Chilli";
    response2.className = "incorrect";
    response3.textContent = "Anti-virus software";
    response3.className = "incorrect";
    response4.textContent = "Browser";
    response4.className = "correct";
  }
}
function question10() {
  {
    answerBtn();

    count.textContent = "10/10";
    question.textContent = "What was the first portable computer?";
    response1.textContent = "iMac";
    response1.className = "incorrect";
    response2.textContent = "MIT Suitcase Computer";
    response2.className = "correct";
    response3.textContent = "ZX Spectrum";
    response3.className = "incorrect";
    response4.textContent = "Amiga 500";
    response4.className = "incorrect";
  }
}

function endGame() {
  next.textContent = "Go Back";
  document.querySelector(".it-quiz").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".bottom-answers").style.cssText +=
    "background-color:#0c4d46";
  document.querySelector(".back-button").style.cssText +=
    "background-color:#0c4d46";

  question.textContent = `Your score is ${score}/10 
   keep it working`;
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
