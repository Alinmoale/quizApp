const itBtn = document.querySelector(".it-quiz");
const medicineBtn = document.querySelector(".medicine-quiz");
const geographyBtn = document.querySelector(".geography-quiz");
const historyBtn = document.querySelector(".history-quiz");
const loader = document.querySelector(".loader");
const bg = document.querySelector(".bg");

itBtn.onclick = function () {
  location.href = "it-quiz.html";
};

medicineBtn.onclick = function () {
  location.href = "medicine-quiz/medicine-quiz.html";
};
geographyBtn.onclick = function () {
  location.href = "geography-quiz/geography-quiz.html";
};
historyBtn.onclick = function () {
  location.href = "history-quiz/history-quiz.html";
};

setTimeout(function () {
  bg.classList.remove("hidden");
}, 1000);

setTimeout(function () {
  loader.classList.add("hidden");
}, 1000);
