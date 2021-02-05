// declare variables we need
const scoreInput = document.querySelector("#score");
const dice = document.querySelector("#dice");
const rollBtn = document.querySelector("#roll-button");
const playerStatus = document.querySelector("#player-status");
let score = 0;

dice.style.display = "none";

// add button event listener on click with condition
rollBtn.addEventListener("click", () => {
   if (rollBtn.textContent === "Roll") {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
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
      dice.style.display = "none";
   }
}

// function to apply condition to generated random number
const checkNumber = (randomNumber) => {
   if (randomNumber === 1) {
      dice.style.display = "block";
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






