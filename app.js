// declare variables we need
let score = 0;
console.log(score);
const scoreInput = document.querySelector("#score");
const dice = document.querySelector("#dice");
const rollBtn = document.querySelector("#roll-button");

//display score in the DOM
scoreInput.textContent = `${score}`;

// add button event listener on click with function
rollBtn.addEventListener("click", () =>{
   while (score < 20) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
      console.log(randomNumber);
      // dice appears in DOM with randomNumber
      dice.textContent = `${randomNumber}`;
      
      // apply condition according to randomNumber produced by the dice
      if (randomNumber === 1) {
         score = 0;
         // you lose text appears in place of Player 1 text in the DOM so replace line below
         console.log("You lost!");
         // roll button is removed from the DOM
         // start again button appears above you lost text
      } else {
         score += randomNumber;
         if (score >= 20) {
            // you win text appears in place of Player 1 text in the DOM so replace line below
            console.log("You win!");
            // roll button is removed from the DOM
            // start again button appears above you win text
         }
      }
   }
})

// remember to reset score to zero when game ends
console.log(score);