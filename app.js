var playerScore;
var computerScore;
var roundNumber;
var isGamePlaying;

const playerScoreH2 = document.getElementById("player-score");
const computerScoreH2 = document.getElementById("computer-score");

const playerChoiceImg = document.getElementById("player-choice");
const computerChoiceImg = document.getElementById("computer-choice");

const optionRockImg = document.getElementById("rock");
const optionPaperImg = document.getElementById("paper");
const optionScissorsImg = document.getElementById("scissors");

const roundNumberSpan = document.getElementById("round-number");
const roundResultH3 = document.getElementById("round-result");

const newGameButton = document.getElementById("new-game-btn");

newGameButton.addEventListener("click", function() {
  startNewGame();
});

optionRockImg.addEventListener("click", function() {
  if (isGamePlaying) {
    selectGesture("rock");
  }
});

optionPaperImg.addEventListener("click", function() {
  if (isGamePlaying) {
    selectGesture("paper");
  }
});

optionScissorsImg.addEventListener("click", function() {
  if (isGamePlaying) {
    selectGesture("scissors");
  }
});

function startNewGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  isGamePlaying = true;

  playerScoreH2.innerHTML = playerScore;
  computerScoreH2.innerHTML = computerScore;
  roundNumberSpan.innerHTML = roundNumber;
  roundResultH3.innerHTML = "";

  playerChoiceImg.src = "";
  computerChoiceImg.src = "";

  optionRockImg.classList.add("active");
  optionPaperImg.classList.add("active");
  optionScissorsImg.classList.add("active");
}

function computerChoice() {
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);

  return options[randomNumber];
}

function selectGesture(playerChoiceValue) {
  var computerChoiceValue = computerChoice();

  playerChoiceImg.src = "img/" + playerChoiceValue + ".svg";
  computerChoiceImg.src = "img/" + computerChoiceValue + ".svg";

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
  playerScoreH2.innerHTML = playerScore;

  roundResultH3.innerHTML = player + " beats " + computer + "!";
  updateRound();
}

function playerLoses(player, computer) {
  computerScore++;
  computerScoreH2.innerHTML = computerScore;

  roundResultH3.innerHTML = computer + " beats " + player + "!";
  updateRound();
}

function draw() {
  roundResultH3.innerHTML = "It's a draw!";
  updateRound();
}

function updateRound() {
  roundNumber++;
  roundNumberSpan.innerHTML = roundNumber;
  if (roundNumber >= 10) {
    roundResultH3.innerHTML = "Game over!";
    isGamePlaying = false;

    optionRockImg.classList.remove("active");
    optionPaperImg.classList.remove("active");
    optionScissorsImg.classList.remove("active");
  }
}

startNewGame();
