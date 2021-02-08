// declare variables we need
const scoreInput = document.querySelector("#score");
const diceBox = document.querySelector("#dice-box");
const rollBtn = document.querySelector("#roll-button");
const playerStatus = document.querySelector("#player-status");
const diceImg = document.querySelector("#dice-img");
let score = 0;

diceBox.style.display = "none";

// event listener triggered on button click with condition
rollBtn.addEventListener("click", () => {
   if (rollBtn.textContent === "Roll") {
      let randomNumber = (Math.floor(Math.random() * 6 + 1));
      checkNumber(randomNumber);
   } else if (rollBtn.textContent === "Start again") {
      resetGame();
   }
})

// function to reset game
const resetGame = () => {
   if (rollBtn.textContent === "Start again") {
      score = 0;
      scoreInput.textContent = "0";
      rollBtn.textContent = "Roll";
      playerStatus.textContent = "Player 1";
      diceBox.style.display = "none";
   }
}

// function to apply condition to generated random number
const checkNumber = (randomNumber) => {
   diceBox.style.display = "block";
   diceImg.src = `img/dice${randomNumber}.png`;
   if (randomNumber === 1) {
      scoreInput.textContent = 0;
      playerStatus.textContent = "You lose!";
      rollBtn.textContent = "Start again";
   } else {
      score += randomNumber;
      scoreInput.textContent = `${score}`;
      if (score >= 20) {
         playerStatus.textContent = "You win!";
         rollBtn.textContent = "Start again";
      }
   }

}






