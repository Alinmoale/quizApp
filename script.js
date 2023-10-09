const itBtn = document.querySelector(".it-quiz");
const medicineBtn = document.querySelector(".medicine-quiz");
const loader = document.querySelector(".loader");
const bg = document.querySelector(".bg");

itBtn.onclick = function () {
  location.href = "it-quiz.html";
};

medicineBtn.onclick = function () {
  location.href = "medicine-quiz/medicine-quiz.html";
};
setTimeout(function () {
  bg.classList.remove("hidden");
}, 1000);

setTimeout(function () {
  loader.classList.add("hidden");
}, 1000);
