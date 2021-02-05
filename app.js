// declare variables we need
let score = 0;
console.log(score);
// insert variable for roll button

// add button event listener on click with function
while (score < 20) {
   let randomNumber = Math.floor(Math.random() * 6 + 1);
   console.log(randomNumber);
   // dice appears in DOM with randomNumber
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

// remember to reset score to zero when game ends
console.log(score);