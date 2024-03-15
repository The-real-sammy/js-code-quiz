// Create a code quiz 

// variables to reference DOM elements
var wordBlank = document.querySelector("feedback");
var timerElement = document.querySelector(".timer");
var lose = document.createElement("div")
lose.classList.add("loser");
document.body.appendChild(lose);
var questionsContainer = document.getElementById("questions");
var startButton = document.querySelector("#start");
var submitButton = document.getElementById('submit');
var choices = document.getElementById('choices');
var initials = document.getElementById('initials');
var feedback = document.getElementById('feedback');




var currentQI = 0;
var timerCount = 60; // Set the initial timer count to 60 seconds
//Array of objects containing Questions, Options and Answers 

var questions = [
  {
    question: "What is HTML? ",
    options: ["HTML stands for Hyper Text Markup Language", "How to make Lasagne", "information about styling a webpage"],
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
var selectedOption = ""; // code to display question target the questions id 

function lose() {
  timerCount -= 10;
  timerElement.textContent = timerCount;
  displayMessage("Wrong!");
}

function win() {
displayMessage("Correct!");
currentQI++;
displayQuestion();
}

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
      if (win() && timerCount > 0) {
        clearInterval(timer);// Stop the timer 
        win();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      lose() // Call a function to end the game when the timer runs out
    }
  }, 1000); // Set the interval to 1000ms (1 second)
}

function displayQuestion() {
  // code to display questions moved within a function
  if (questionsContainer) {
    questionsContainer.innerHTML = ""; //clear existing text  
    var questionObject = questions[0]; // start array at 0
    var askQuestion = document.createElement("p")
    askQuestion.textContent = [0 + 1] + "." + questionObject.question;
    questionsContainer.appendChild(askQuestion);

    var answersOpt = document.createElement("ul");
    for (let j = 0; j < questionObject.options.length; j++) {
      var option = questionObject.options[j];
      var answerButton = document.createElement("button");
      // Create a button for each answer option
      answerButton.textContent = (j + 1 + ".") + option 

            //event listener to click on answer option
      answerButton.addEventListener('click', function() {
        var selectedOption = option; // Capture the selected option
  
        // This will check if the selected option matches the specific statement
        if (selectedOption === questions[currentQI].answer) {
          console.log("The statement is true!");
          // Perform actions if the statement is true (e.g., display a message, update score)
        // } else {
        //   winner(selectedOption, questionObject); // Call winner for other options
        }

      

        var selectedOption = option;
      });
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

//this is to filter what the user clicks on - event.target will only target the child element
function questionClick(event) {
  // var answerButton = event.target;

  if (event.target.textContent === questions[currentQI].answer) {
    // Correct answer actions
    feedback.textContent = "Correct!";
    feedback.setAttribute("class", "feedback");
    setTimeout(function () {
      feedback.setAttribute("class", "feedback hide");
      currentQI++;
      displayQuestion();
    }, 1000);
  } else {
    // Incorrect answer actions
    timerCount -= 10;
    timerElement.textContent = timerCount;
    // ... (rest of incorrect answer actions)
  }

//   //if the clicked element does not match a choice button, end quiz // ERROR HANDLER
//   if (!answerButton.matches(".choice")) { //! = opposite of 
//     return;
//   } // if the value of the button does not equal the ANSWER from the questions array
//   if (answerButton.value !== questionObject[questions].answer) {
//     timer -= 10; // subtract 10 seconds
//     // if the time is less than 0, then stop at 0
//     if (timer < 0) {
//       timer = 0;
//     }
//     // displays the new time on the screen
//     timer.textContent = timerCount;
//     //displays wrong! text on screen
//     feedback.textContent = "Wrong!";
//   } else {
//     //displays correct! text on screen
//     feedback.textContent = "Correct!";
//   }
//   // shows right or wrong feedback on the page for half a second
//   feedback.setAttribute("class", "feedback");
//   setTimeout(function () {
//     feedback.setAttribute("class", "feedback hide");
// //moves to the next question after feedback
// currentQI++;
 
//   //if time is less than/equal to 0 OR there are no questions left, refer to quiz end function and end game.
//   if (timer <= 0 || questionObject === questions.length) {
//     endGame();
//     //if not, start getQuestion function
//   } else {
//     displayQuestion(); // displaying the next question
//   }   }, 1000);
} questionClick()










function displayMessage() {
  document.getElementById("messageDisplay").textContent = message;
}

function updateTimerDisplay(time) {
  document.getElementById("timerDisplay").textContent = time;
}

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
function endGame() {

  // this will stop the timer and end the game 
  clearInterval(timer)

  // this removes the class (of hide) from the end-screen Id in HTML so that the end screen displays
  var endgame = document.getElementById("end-screen");
  endgame.removeAttribute("class")

  // code handle end of game and to display the final score
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;
  //hide questions by setting questions to a class of hide in CSS = .hide{ display: none} in CSS 
  questionsEl.setAttribute("class", "hide");

  // allow the user to save their initials and score to local storage 
}


function saveHighScore() {
  //this gets the value (initials) of the input box - .trim will ensure spaces at front or end do not affect value
  var initials = initial.value.trim();
  //check if there is no value input 
  if (initials !== "") {
    //this will get the saved scores from local storage OR, set to an empty array if there is no scores
    var highscores = JSON.parse(window.localStorage.getItem("points")) || [];
    //formats new score object for current user
    var newScore = {
      score: time,
      initials: initial,
    };
    //saves new score to the local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    //redirects user to the highscore page
    window.location.href = "highscores.html";
  }
}
//if user clicks enter then save highscore
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// allow the user to save their score to local storage 
// This is to track the score
function displayHighScores() {

  // This is will get the scores from localstorage or set it to an empty array
  var points = JSON.parse(window.localStorage.getItem('points')) || [];

  // this will sort highscores by score property in descending order
  points.sort(function (a, b) {
    return b.points - a.points;
  });

  for (var i = 0; i < points.length; i += 1) {
    // create li tag for each high score
    var liB = document.createElement('li');
    liB.textContent = points[i].initials + ' - ' + points[i].score;

    // display on page
    var highScore = document.getElementById('points');
    highScore.appendChild(liB);
  }
}
//this clears the page on page reload.
function clearPoints() {
  window.localStorage.removeItem('points');
  window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
  var check = document.getElementById('clear')
  if (check) {
    console.log(check)
    check.onclick = clearPoints;
    displayHighScores();
  }

});



// run function when page loads
displayHighScores();

// user clicks button to submit initials
submitButton.onclick = displayHighScores;
// user clicks button to start quiz
startButton.onclick = startQuiz;
// user clicks on element containing choices
choices.onclick = questionClick;

initials.onkeyup = checkForEnter;