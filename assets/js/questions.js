// Create a code quiz that contains the following requirements:

var wordBlank = document.querySelector("feedback");
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
    options: ["HTML stands for Hyper Text Markup Language", "How to make Lasagne", "information about styling a webpage"],
    answer: "HTML stands for Hyper Text Markup Language" },
  {
    question: "What is CSS?",
    options: ["Cascade style sheets - used to style webpages", "A html tag", "a JS element"],
    answer: "Cascade style sheets - used to style webpages",
  },
  {
    question: "What is DOM?",
    options: ["Document Object Model", "a styling element", "Document oriented modelling"],
    answer: "Document Object Model",
  },

  {
    question: "What is JavaScript?",
    options: ["JavaScript is an interpreted, client-side, event-based, object oriented scripting language.", "it is another name for java", "a css styling property"],
    answer: "JavaScript is an interpreted, client-side, event-based, object oriented scripting language.",
  }
]

// Undefined variables 
var timer;
var win;  //  used to track the user's win status
var selectedOption = "";
// code to display question target the questions id 
var questionsContainer = document.getElementById("questions");
var startButton = document.querySelector("#start");

// * A start button that when clicked a timer starts and the first question appears.
function startQuiz() {
  // eventListener added to start button to trigger timer, displaying first question
  var startButton = document.querySelector("#start");
  startButton.addEventListener("click", function () {
    startTimer();
    questionsContainer.removeAttribute("class") //timer starts when button is clicked.
    displayQuestion(); //display function called to show code at button click event
  }) // start timer when button clicked 
}

function startTimer() {
  //  setting the timer 
  timer = setInterval(function () {
    timerCount--; // double dash -- is the decrement operator, used to decrease value of variable by 1
    timerElement.textContent = timerCount; // Update the timer display

    if (timerCount >= 0) {
      // test if user has completed the quiz - && checks if both statements are true
      if (winner() && timerCount > 0) {
        clearInterval(timer);// Stop the timer 
        winner();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loser() // Call a function to end the game when the timer runs out
    }
  }, 1000); // Set the interval to 1000ms (1 second)
}

function selectedAnswer() {
  if (selectedOption !== questions.answer.current(questions)) {
    loser ();
  // Display the new time on the page using .textContent
  // and .PLAY() the sfxWrong sound and display "Wrong!" using .textContent
    //store win if answered correctly!

  }}

function displayQuestion() {
  // code to display questions moved within a function
  if (questionsContainer) {
    questionsContainer.innerHTML = ""; //clear existing text  
    var questionObject = questions[0]; // start array at 0
    var askQuestion = document.createElement("p")
    askQuestion.textContent = [0 + 1 ] + "." + questionObject.question;
    questionsContainer.appendChild(askQuestion);

    var answersOpt = document.createElement("ul");
    for (let j = 0; j < questionObject.options.length; j++) {
      var option = questionObject.options[j];
      var answerButton = document.createElement("button");
      // Create a button for each answer option
      answerButton.textContent= (j + 1 + ".") + option 

      //event listener to click on answer option
      answerButton.addEventListener('click', function() {
        var selectedOption = option; });
        questionsContainer.appendChild(answersOpt)

      // console.log('user selected:', answer)
      // Add logic here to check the answer, and update the score
      answersOpt.appendChild(answerButton);
      console.log("is this the askQuestions", askQuestion)
      console.log("what is this", answersOpt)
    };

  } else {
    console.error("Questions container not found in the DOM");
  }
} startQuiz();

if (selectedOption !== questions[currentQuestion].answer) {
  timerCount -=5, //deducting time for incorrect answer
  updateTimerDisplay (timerCount)  // updating the time displayed 
  playSound("wrongSound"); // playing sound effect
  displayMessage("Wrong Answer :( !!")
}
else {
  playSound("sfxRight");
  displayMessage ("Correct!🏆") 


}
// store win if answered correctly!

function loser(){
  timerCount.textContent
    
      // wordBlank.textContent =  ""
      // wrongCounter++
      // startButton.disabled = false
      // setLosses()
    
  }
  

//function to check selected answer is right or wrong 

  // IF the VALUE of selected answer is NOT equal !== to the questions.answer (from the questions array you created). remember it has to be the questions.answer for the CURRENT QUESTION
// THEN deduct -15 seconds from your TIMER COUNT variable that you created
// Display the new time on the page using .textContent
// and .PLAY() the sfxWrong sound and display "Wrong!" using .textContent
// ELSE .PLAY() the sfxRight sound and display "Correct!" using .textContext


//  //check if answer is correct
//       // Store the selected option when the button is clicked
//       if (selectedOption === questionObject.answer ){
//         console.log("correct answer selected")
//         winner(selectedOption, questionObject );
//         //add score tracker logic here
//       }
//       else {
//         loser () 
//         console.log("wrong answer selected")
//       }
 
function storeWin() {

}

function winner() {
playSound("correctSound") // play sound effect
displayMessage ("Correct!🏆") 
// wordBlank.textContent = "Correct!🏆 "
// correctCounter++
// startButton.disabled = false
// storeWin() 

  }
  function playSound(){
    var audio = new Audio (`assets/sfx/${sound}.mp3`);
    audio.play();
    }

    function displayMessage(){
      document.getElementById ("messageDisplay").textContent=message;
    }

  function updateTimerDisplay (time) {
    document.getElementById("timerDisplay").textContent = time;
  }




//Call the winner function with the selected option and the current question object
// For example, assuming the selected option is stored in a variable called selectedOption
// and the current question object is stored in a variable called currentQuestionObject
//winner(selectedOption, currentQuestionObject);

// The loser function is called when timer reaches 0


//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock
//   *
// * The quiz should end when all questions are answered or the timer reaches 0.



//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

function endGame() {


  //test if timer has run out 
  // code handle end of game and to display the final score
  // allow the user to save their initials and score to local storage 
} 

  // allow the user to save their initials and score to local storage 
// This is to track the score
function displayHighscores() {

  // This is will get the scores from localstorage or set it to an empty array
  var points = JSON.parse(window.localStorage.getItem('points')) || [];

  // this will sort highscores by score property in descending order
  points.sort(function (a, b) {
    return b.points - a.points;
  });

  for (var i = 0; i < points.length; i += 1) {
    // create li tag for each high score
    var li-b = document.createElement('li');
    li-b.textContent = points[i].initials + ' - ' + points[i].score;

    // display on page
    var highScore = document.getElementById('points');
    highScore.appendChild(liTag);
  }
}

function clearPoints() {
  window.localStorage.removeItem('points');
  window.location.reload();
}

document.getElementById('clear').onclick = clearPoints;

// run function when page loads
displayHighscores();
