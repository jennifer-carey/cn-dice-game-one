let score = 0;
console.log(score);
// insert variable for roll button

// button event listener on click function
while (score < 20) {
   let randomNumber = Math.floor(Math.random() * 6 + 1);
   console.log(randomNumber);

   if (randomNumber === 1) {
      score = 0;
      console.log("You lose!");
   } else {
      score += randomNumber;
      if (score >= 20) {
         console.log("You win!");
      }
   }
}

// remember to reset score to zero when game ends
console.log(score);