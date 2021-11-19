var questions = [{
    question: "Who invented the rocking chair?",
    answer1: "David Newman",
    answer2: "Benjamin Franklin",
    answer3: "Alan Shepard",
    answer4: "Rodrigo Montero",
    correct: "Benjamin Franklin"
  },{
    question: "Wich is the most popular sport to create a film about?",
    answer1: "Soccer",
    answer2: "Base Ball",
    answer3: "Boxing",
    answer4: "Tenis",
    correct: "Boxing"
  },{
    question: "What does the word Karate means?",
    answer1: "To hit",
    answer2: "The art of fighting",
    answer3: "Fighter",
    answer4: "Empty hand",
    correct: "Empty hand"
  },{
    question: "Where French fries were invented?",
    answer1: "Belgium",
    answer2: "France",
    answer3: "Germany",
    answer4: "Mexico",
    correct: "Belgium"
  },{
    question: "In wich year Halley's Comet will appear again?",
    answer1: "2026",
    answer2: "2061",
    answer3: "2080",
    answer4: "3012",
    correct: "2061"
  }];
  

// Timer
var time = document.getElementById("timer");
var yourScore = document.querySelector(".display-3");
var submitButton = document.getElementById("buttonInitials");
var inputLine = document.getElementById("inlineFormInput");

var secondsLeft = 50;
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      console.log(secondsLeft);
        time.textContent = "Time: " + secondsLeft;
      
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          cardQuestions.setAttribute("style", "display: none");
          displayJumbo.setAttribute("style", "display: block");
          yourScore.textContent = "Your score is: " + secondsLeft;
          startButton.setAttribute("style", "display: none");
          submitButton.setAttribute("style", "display: inline");
          inputLine.setAttribute("style", "display: inline-block");
      
          } else if (runningQuestion === 5) {
            clearInterval(timerInterval);
            console.log(secondsLeft);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");

          }
        
          

    }, 1000);
  }
  

// Start Button
var startButton = document.getElementById("startQuiz");
var cardQuestions = document.getElementById("questionsCard");
var displayJumbo = document.querySelector(".jumbotron");

startButton.addEventListener("click", startGame);

function startGame() {
    setTime();
    firstQuestion();
    console.log("game on");
    cardQuestions.setAttribute("style", "display: block");
    displayJumbo.setAttribute("style", "display: none");

}


//Questions
var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");
var question = document.getElementById("questions");
var correctAnswer = document.getElementById("correctIncorrect");
var incorrectAnswer = document.getElementById("correctIncorrect");

var runningQuestion = 0;

// First Question Send questions to card
function firstQuestion() {
  var quest = questions[runningQuestion];
  question.textContent = quest.question;
  answer1.textContent = quest.answer1;
  answer2.textContent = quest.answer2;
  answer3.textContent = quest.answer3;
  answer4.textContent = quest.answer4;
}
var quizBtn = document.querySelectorAll(".quizBtn");

// Event listener for buttons and q/a
for (var i = 0; i < quizBtn.length; i++) {
  quizBtn[i].addEventListener("click", function userAnswer(event) {
    event.stopPropagation();
    if (event.currentTarget.innerText === questions[runningQuestion].correct){
    correctAnswer.textContent = "Correct + 5 sec";
    correctAnswer.setAttribute("style", "color: green");
    secondsLeft = secondsLeft + 5;
    console.log("correct");
  } else {
    incorrectAnswer.textContent = "Incorrect - 5 sec";
    incorrectAnswer.setAttribute("style", "color: red");
    secondsLeft = secondsLeft - 5;
    console.log("Incorrect minus 5 seconds");
  }
  console.log(runningQuestion);
  runningQuestion++;


  if (runningQuestion < 5) {
    firstQuestion();
  }
});
}

// High Scores 

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

submitButton.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("click");
  
  var initials = inputLine.value;
  var finalScore = {initials, secondsLeft};
  console.log("Final Score: " + finalScore);
  console.log(initials + " your score is: " + secondsLeft); 




  // Send to localStorage

  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));

});