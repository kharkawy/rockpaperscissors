var playerScore = 0;
var computerScore = 0;
var roundNumber = 1;

var playerScore_h2 = document.getElementById("player-score");
var computerScore_h2 = document.getElementById("computer-score");

var playerChoice_img = document.getElementById("player-choice");
var computerChoice_img = document.getElementById("computer-choice");

var optionRock_img = document.getElementById("rock");
var optionPaper_img = document.getElementById("paper");
var optionScissors_img = document.getElementById("scissors");

var roundNumber_span = document.getElementById("round-number");
var roundResult_h3 = document.getElementById("round-result");

var newGame_button = document.getElementById("new-game-btn");

function init() {
  optionRock_img.addEventListener("click", function() {
    game("rock");
  });

  optionPaper_img.addEventListener("click", function() {
    game("paper");
  });

  optionScissors_img.addEventListener("click", function() {
    game("scissors");
  });
}

function computerChoice() {
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  if (options[randomNumber] === "rock") {
    computerChoice_img.src = "img/rock.svg";
  } else if (options[randomNumber] === "paper") {
    computerChoice_img.src = "img/paper.svg";
  } else if (options[randomNumber] === "scissors") {
    computerChoice_img.src = "img/scissors.svg";
  }
  return options[randomNumber];
}

function game(playerChoiceValue) {
  var computerChoiceValue = computerChoice();
}
init();
