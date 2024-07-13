const btn = document.getElementById("btn");
const output = document.getElementById("output");
const userInput = document.getElementById("userInput");
const date = document.getElementById("date");

const day = new Date(Date.now()).getDate();
const month = new Date(Date.now()).getMonth() + 1;
const year = new Date(Date.now()).getFullYear();
date.textContent = `${year} ${month} ${day}`;

btn.addEventListener("click", showOutput);

const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask Me Later",
  "Definitely",
  "You Already Know",
  "No Way",
];

let prevQuestion = "";

function showOutput() {
  if (
    userInput.value === "" ||
    userInput.value === prevQuestion ||
    !userInput.value.includes("?")
  )
    return;
  const rand = Math.floor(Math.random() * answers.length);
  output.textContent = answers[rand];
  prevQuestion = userInput.value;
}

userInput.addEventListener("click", clearOutput);

function clearOutput() {
  output.textContent = "";
}
