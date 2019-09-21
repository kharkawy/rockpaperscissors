var playerScore;
var computerScore;
var roundNumber;
var isGamePlaying;

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

//Create event listeners for the buttons
newGame_button.addEventListener("click", function() {
  startNewGame();
});

optionRock_img.addEventListener("click", function() {
  if (isGamePlaying) {
    game("rock");
  }
});

optionPaper_img.addEventListener("click", function() {
  if (isGamePlaying) {
    game("paper");
  }
});

optionScissors_img.addEventListener("click", function() {
  if (isGamePlaying) {
    game("scissors");
  }
});

//Setup for a new game
function startNewGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  isGamePlaying = true;

  playerScore_h2.innerHTML = playerScore;
  computerScore_h2.innerHTML = computerScore;
  roundNumber_span.innerHTML = roundNumber;
  roundResult_h3.innerHTML = "";

  playerChoice_img.src = "";
  computerChoice_img.src = "";

  optionRock_img.classList.remove("inactive");
  optionRock_img.classList.add("active");
  optionPaper_img.classList.remove("inactive");
  optionPaper_img.classList.add("active");
  optionScissors_img.classList.remove("inactive");
  optionScissors_img.classList.add("active");
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

  roundResult_h3.innerHTML = player + " beats " + computer + "!";
  updateRound();
}

//If computer wins a round, update his score, update round number and display round result
function playerLoses(player, computer) {
  computerScore++;
  computerScore_h2.innerHTML = computerScore;

  roundResult_h3.innerHTML = computer + " beats " + player + "!";
  updateRound();
}

//If it's a draw, no one gets a point, round number is updated and round result displayed
function draw() {
  roundResult_h3.innerHTML = "It's a draw!";
  updateRound();
}

//To update round number
function updateRound() {
  roundNumber++;
  roundNumber_span.innerHTML = roundNumber;
  if (roundNumber >= 10) {
    roundResult_h3.innerHTML = "Game over!";
    isGamePlaying = false;

    optionRock_img.classList.remove("active");
    optionRock_img.classList.add("inactive");
    optionPaper_img.classList.remove("active");
    optionPaper_img.classList.add("inactive");
    optionScissors_img.classList.remove("active");
    optionScissors_img.classList.add("inactive");
  }
}

startNewGame();
