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

function computerChoice() {
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);

  return options[randomNumber];
}

function game(playerChoiceValue) {
  var computerChoiceValue = computerChoice();

  playerChoice_img.src = "img/" + playerChoiceValue + ".svg";
  computerChoice_img.src = "img/" + computerChoiceValue + ".svg";

  switch (playerChoiceValue + " " + computerChoiceValue) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      playerWins(playerChoiceValue, computerChoiceValue);
      break;

    case "scissors rock":
    case "rock paper":
    case "paper scissors":
      playerLoses(playerChoiceValue, computerChoiceValue);
      break;

    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      draw();
      break;
  }
}

function playerWins(player, computer) {
  playerScore++;
  playerScore_h2.innerHTML = playerScore;

  roundResult_h3.innerHTML = player + " beats " + computer + "!";
}

function playerLoses(player, computer) {
  computerScore++;
  computerScore_h2.innerHTML = computerScore;

  roundResult_h3.innerHTML = computer + " beats " + player + "!";
}

function draw() {
  roundResult_h3.innerHTML = "It's a draw!";
}

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

init();
