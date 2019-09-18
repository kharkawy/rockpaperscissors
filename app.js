var playerScore;
var computerScore;
var roundNumber;
var gamePlaying = true;

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

//Start the game - set scores and round values to 0, add event listeners that pass user's choice
function init() {
  startNewGame();

  newGame_button.addEventListener("click", function() {
    startNewGame();
  });

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

//Choose random item from possible options and return it as computer choice
function computerChoice() {
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);

  return options[randomNumber];
}

//Display both player and computer choices, compare them and decide on the score
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

//If player wins a round, update his score, update round number and display round result
function playerWins(player, computer) {
  playerScore++;
  playerScore_h2.innerHTML = playerScore;

  updateRound();
  roundResult_h3.innerHTML = player + " beats " + computer + "!";
}

//If computer wins a round, update his score, update round number and display round result
function playerLoses(player, computer) {
  computerScore++;
  computerScore_h2.innerHTML = computerScore;

  updateRound();
  roundResult_h3.innerHTML = computer + " beats " + player + "!";
}

//If it's a draw, no one gets a point, round number is updated and round result displayed
function draw() {
  updateRound();
  roundResult_h3.innerHTML = "It's a draw!";
}

//To update round number
function updateRound() {
  roundNumber++;
  roundNumber_span.innerHTML = roundNumber;
  if (roundNumber >= 10) {
    isGamePlaying = false;
    console.log(isGamePlaying);
  }
}

function startNewGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;

  playerScore_h2.innerHTML = playerScore;
  computerScore_h2.innerHTML = computerScore;
  roundNumber_span.innerHTML = roundNumber;
  roundResult_h3.innerHTML = "";

  playerChoice_img.src = "";
  computerChoice_img.src = "";
}

init();

//TO DO
//1. Game over
//create a gamePlaying bool; when starting a new game, set it to true, add event listeners to buttons, reset scores and rounds values, clear computer and player choice images; when the game reaches a 10th round, change bool to false and remove event listeners, display game over;
