// Create a code quiz that contains the following requirements:

// * A start button that when clicked a timer starts and the first question appears.

var timerElement = document.querySelector(".timer");
var timerCount = 60; // Set the initial timer count to 60 seconds
var lose = document.createElement("div")
lose.classList.add("loser");
document.body.appendChild(lose);

var correctCounter = 0;
var wrongCounter = 0;

//Array of objects containing Questions, Options and Answers 
var questions = [
  {
    question: "What is HTML? ",
    options: ["HTML stands for Hyper Text Markup Language", "How to make Lasagne", "information about styling a webpage"]
   answer: "HTML stands for Hyper Text Markup Language"
  },
  {
    question: "What is CSS?",
    options: ["Cascade style sheets - used to style webpages", "A html tag", "a JS element"],
    answer: "Cascade style sheets - used to style webpages",
  },
  {
    question: "What is DOM?",
    options: ["Document Object Model", "a styling element", "Document oriented modelling"],
    answer: "Document Object Model",
  }
  { question: "What is JavaScript?",
  options: ["JavaScript is an interpreted, client-side, event-based, object oriented scripting language.", "it is another name for java", "a css styling property"],
      answer: "JavaScript is an interpreted, client-side, event-based, object oriented scripting language.",}
]


// Undefined variables 
var timer;
var win;  //  used to track the user's win status


function startTimer() {
  //  setting the timer 
  timer = setInterval(function () {
    timerCount--; // double dash -- is the decrement operator, used to decrease value of variable by 1
    timerElement.textContent = timerCount; // Update the timer display

    if (timerCount >= 0) {
      // test if user has completed the quiz
      clearInterval(timer);// Stop the timer when it reaches 0
      endGame() // Call a function to end the game when the timer runs out
    }
  }, 1000); // Set the interval to 1000ms (1 second)
}

// eventListener added to start button to trigger timer, displaying first question
var startButton = document.querySelector("#start");
startButton.addEventListener("click", function () {
  startTimer(); //timer starts when button is clicked.

  // code to display first question:

  //   * Questions contain buttons for each answer.
  //   * 
  //   * When answer is clicked, the next question appears
  //   * 
  //   * If the answer clicked was incorrect then subtract time from the clock

  // * The quiz should end when all questions are answered or the timer reaches 0.
})


//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

function endGame() {

  function winner() {
    //store win if answered correctly!
    wordBlank.textContent = "Correct!🏆 "
    correctCounter++
    startButton.disabled = false
    storeWin()
  }

  // The loser function is called when timer reaches 0
  function loser() {
    //store win if answered correctly!
    wordBlank.textContent = "Wrong Answer :( !! "
    wrongCounter++
    startButton.disabled = false
    setLosses()
  }

  //test if timer has run out 
  // code handle end of game and to display the final score
  // allow the user to save their initials and score to local storage 
}