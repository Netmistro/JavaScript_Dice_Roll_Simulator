// Modern, responsive Dice Roll Simulator JS

const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

// Unicode dice faces 1-6: \u2680 - \u2685
const diceFaces = [
  "&#9856;", // 1
  "&#9857;", // 2
  "&#9858;", // 3
  "&#9859;", // 4
  "&#9860;", // 5
  "&#9861;", // 6
];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  diceEl.innerHTML = diceFaces[rollResult - 1];
  historyList.unshift(rollResult); // add to front for newest-on-top
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  historyList.slice(0, 8).forEach((roll, idx) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${historyList.length - idx} <span>${
      diceFaces[roll - 1]
    }</span>`;
    rollHistoryEl.appendChild(listItem);
  });
}

function animateDice() {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 900);
}

buttonEl.addEventListener("click", animateDice);

// Accessibility: Allow rolling with Enter/Space when focused
buttonEl.addEventListener("keyup", (event) => {
  if (event.key === " " || event.key === "Enter") {
    animateDice();
  }
});

// Responsive: On resize, adjust dice size for very small screens (handled in CSS)

// Optional: Add keyboard support for dice
diceEl.tabIndex = 0;
diceEl.setAttribute("role", "img");
diceEl.setAttribute("aria-label", "Current dice face");
diceEl.addEventListener("keyup", (event) => {
  if (event.key === " " || event.key === "Enter") {
    animateDice();
  }
});
