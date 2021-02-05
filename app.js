// declare variables we need
const scoreInput = document.querySelector("#score");
const dice = document.querySelector("#dice");
const rollBtn = document.querySelector("#roll-button");
const playerStatus = document.querySelector("#player-status");
let score = 0;

//function to apply condition to dice number
while (score < 20) {
   let randomNumber = Math.floor(Math.random() * 6 + 1);
   console.log(randomNumber);
   dice.textContent = `${randomNumber}`;
      if (randomNumber === 1) {
         score = 0;
         playerStatus.textContent = "You lose!";
      } else {
         score += randomNumber;
         scoreInput.textContent = `${score}`;
         if (score >= 20) {
            playerStatus.textContent = "You win!";
         }
      }
}

// function to display dice

// add button event listener on click with function
rollBtn.addEventListener("click", () =>{

})

// remember to reset score to zero when game ends
console.log(score);