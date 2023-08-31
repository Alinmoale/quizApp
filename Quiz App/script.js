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
const backbtn = document.querySelector(".back-button");
const answerButtons = document.querySelectorAll(".answer-btn");

let correct = document.querySelector(".correct");

// correct.addEventListener("click", () => {
//   if (buttonClicked == false) {
//     score++;
//     console.log(score);
//   }
//   buttonClicked = true;
// });

// function oncetrue() {
//   correct.addEventListener(
//     "click",
//     () => {
//       console.log(score);
//       score++;
//       console.log(score);
//     },
//     { once: true }
//   );
// }
function answerBtn() {
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("correct")) {
        if (!button.classList.contains("clicked")) {
          score++;
          button.classList.add("clicked");
          console.log(score);
        }
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

// startGame = () => {
//   questionCounter = 0;
//   score = 0;
//   avalibleQuestions = [...questions];
//   console.log(avalibleQuestions);
//   getNewQuestion();
// };

// startGame();

next.addEventListener("click", () => {
  if (index === 0) {
    question2();
    index++;
  } else if (index === 1) {
    question3();
    index++;
  } else if (index === 2) {
    question4();
    index++;
  } else if (index === 3) {
    question5();
    index++;
  } else if (index === 4) {
    question6();
    index++;
  } else if (index === 5) {
    question7();
    index++;
  } else if (index === 6) {
    question8();
    index++;
  } else if (index === 7) {
    question9();
    index++;
  } else if (index === 8) {
    question10();
    index++;
    console.log(score);
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
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
function question6() {
  {
    answerBtn();

    count.textContent = "6/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
function question7() {
  {
    answerBtn();

    count.textContent = "7/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
function question8() {
  {
    answerBtn();

    count.textContent = "8/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
function question9() {
  {
    answerBtn();

    count.textContent = "9/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
function question10() {
  {
    answerBtn();

    count.textContent = "10/10";
    question.textContent = "What was the name of the first computer virus?";
    response1.textContent = "Trojan virus";
    response1.className = "incorrect";
    response2.textContent = "Ada Lovelace";
    response2.className = "correct";
    response3.textContent = "Creeper program";
    response4.textContent = "Bob Thomas";
  }
}
question1();
