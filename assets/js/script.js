// Create a code quiz that contains the following requirements:

// * A start button that when clicked a timer starts and the first question appears.

var timerElement = document.querySelector(".timer")
var win =

// Undefined variables 
var timer;
var timerCount;

function startTimer() {
//  setting the timer 
  timer = setInterval(function() {
    timerCount--; 
    // double dash -- is the decrement operator, used to decrease value of variable by 1
    timerElement.textContent=timerCount;
    if (timerCount >= 0) {
      // test if user has completed the 
      if ()
    }

  })
}



//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score