const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
      break;
    case 2:
      return "&#9857;";
      break;
    case 3:
      return "&#9858;";
      break;
    case 4:
      return "&#9859;";
      break;
    case 5:
      return "&#9860;";
      break;
    case 6:
      return "&#9861;";
      break;
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
