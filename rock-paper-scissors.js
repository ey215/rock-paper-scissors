//Create function getRandomInt to return integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Create function getComputerChoice that returns either "Rock", "Paper", or "Scissors"
function getComputerChoice() {
  //Create variable num wity type integer and intial value of 0
  let num = 0;
  //Create variable pick type string and intitial value of ""
  let pick = "";

  //Set num to result of getRandomInt with argument of 3

  num = getRandomInt(3);

  //Use if/else to set pick to either "Rock", "Paper", or "Scissors" based on int in num

  if (num === 0) {
    pick = "Rock";
  } else if (num === 1) {
    pick = "Paper";
  } else {
    pick = "Scissors";
  }

  return pick;
}

//Add a function playRound that compares playerSelection to computerSelection and decides winner

function playRound(playerSelection, computerSelection) {
  //If statement to see if playerSelection and computerSelectin are
  //equal and return a draw string
  //if (playerWins != 5 && compWins != 5) {

  let roundOutput = "";

  if (playerSelection === computerSelection) {
    roundOutput =
      "Both players selected " + playerSelection + ", no winner this round.";
  }

  //Results if playerSelection is rock and computerSelection is different
  else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      compWins = compWins + 1;
      roundOutput =
        "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      roundOutput =
        "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  //Resuts if playerSelectin is paper and computerSelectin is different
  else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      compWins = compWins + 1;
      roundOutput =
        "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      roundOutput =
        "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  //Results if playerSelction is scissors
  else {
    if (computerSelection === "Rock") {
      compWins = compWins + 1;
      roundOutput =
        "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      roundOutput =
        "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  if (playerWins === 5 || compWins === 5) {
    removeElements(choose);
    addResetButton();
    return declareWinner();
  } else {
    return roundOutput;
  }
}

function removeElements(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

function beginMessage() {
  content.textContent = "Click a button below to make your first selection.";
  results.appendChild(content);
}

function addResetButton() {
  let btn = document.createElement("button");
  btn.innerHTML = "New Game";
  btn.id = "newGame";
  btn.onclick = function () {
    removeElements(choose);
    removeElements(results);

    content.textContent = "Click Start Game to play another game.";
    results.appendChild(content);
    playGame();
  };
  choose.appendChild(btn);
}

function addPlayerButtons(buttonId, buttonText) {
  let btn = document.createElement("button");
  btn.innerHTML = buttonText;
  btn.id = buttonId;
  btn.classList = "inputButton";
  choose.appendChild(btn);
  buttonPlayRound("#" + buttonId);
}

function setupStartGameClick() {
  const btn = document.querySelector("#startGame");
  btn.addEventListener("click", () => {
    resetCounters();
    removeElements(choose);
    removeElements(results);
    beginMessage();
    addPlayerButtons("Rock", "Rock");
    addPlayerButtons("Paper", "Paper");
    addPlayerButtons("Scissors", "Scissors");
  });
}

function buttonPlayRound(btnid) {
  const btn = document.querySelector(btnid);
  btn.addEventListener("click", () => {
    roundsPlayed++;

    content.textContent = playRound(btnid.slice(1), getComputerChoice());
    results.appendChild(content);

    playerScore.textContent = "Your round wins: " + playerWins;
    results.appendChild(playerScore);

    computerScore.textContent = "Computer round wins: " + compWins;
    results.appendChild(computerScore);

    rndPlay.textContent = "Rounds played: " + roundsPlayed;
    results.appendChild(rndPlay);
  });
}

function addStartButton(buttonId, buttonText) {
  let btn = document.createElement("button");
  btn.innerHTML = buttonText;
  btn.id = buttonId;
  btn.classList = "inputButton";
  choose.appendChild(btn);
}

let playerWins = 0;
let compWins = 0;
let roundsPlayed = 0;
let keepGoing = true;

const results = document.querySelector("#results");
const choose = document.querySelector("#choose");
const content = document.createElement("div");
const playerScore = document.createElement("div");
const computerScore = document.createElement("div");
const rndPlay = document.createElement("div");

const buttons = document.querySelectorAll("button");

playGame();

function playGame() {
  addStartButton("startGame", "Start Game");
  setupStartGameClick();
}
function declareWinner() {
  const totalResult = document.createElement("div");

  if (playerWins > compWins) {
    totalResult.textContent =
      "You Win! You won " +
      playerWins +
      " rounds and the Computer won " +
      compWins +
      " rounds.";
  } else {
    totalResult.textContent =
      "You Lose! You won " +
      playerWins +
      " rounds and the Computer won " +
      compWins +
      " rounds.";
  }
  results.appendChild(totalResult);
}

function resetCounters() {
  compWins = 0;
  playerWins = 0;
  roundsPlayed = 0;
}

let playerSelection = "";
//playerSelection = prompt();

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

//Create counting variable named playerWins type integer for player wins with intial value of 0

//Create countign variable named compWins type integer for computer wins with inital value of 0

//Create counting variable named roundsPlayed to track number of rounds with inital value of 0

//Print playerWins, compWins and winner of game
