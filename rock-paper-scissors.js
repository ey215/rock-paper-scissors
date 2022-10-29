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
    pick = "rock";
  } else if (num === 1) {
    pick = "paper";
  } else {
    pick = "scissors";
  }

  return pick;
}

//Add a function playRound that compares playerSelection to computerSelection and decides winner

function playRound(playerSelection, computerSelection) {
  //make playerSelection lower case
  playerSelection = playerSelection.toLowerCase();

  //If statement to see if playerSelection and computerSelectin are
  //equal and return a draw string

  if (playerSelection === computerSelection) {
    return (
      "Both players selected " + playerSelection + ", no winner this round."
    );
  }

  //Results if playerSelection is rock and computerSelection is different
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compWins = compWins + 1;
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  //Resuts if playerSelectin is paper and computerSelectin is different
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      compWins = compWins + 1;
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  //Results if playerSelction is scissors
  else {
    if (computerSelection === "rock") {
      compWins = compWins + 1;
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
      playerWins = playerWins + 1;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }
}

//Function to prompt for player entry
function playerPrompt() {
  let playerEntry = "";
  playerEntry = prompt(
    " Round " + roundsPlayed + ": Rock, Paper, or Scissors?"
  );
  return playerEntry;
}

function showResults() {
  const results = document.querySelector("#results");
  const content = document.createElement("div");
  const playerScore = document.createElement("div");
  const computerScore = document.createElement("div");

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      content.textContent = playRound(button.id, getComputerChoice());
      results.appendChild(content);

      playerScore.textContent = playerWins;
      results.appendChild(playerScore);

      computerScore.textContent = compWins;
      results.appendChild(computerScore);
    });
  });
}

let playerSelection = "";
//playerSelection = prompt();

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

//Create counting variable named playerWins type integer for player wins with intial value of 0
let playerWins = 0;

//Create countign variable named compWins type integer for computer wins with inital value of 0
let compWins = 0;

//Create counting variable named roundsPlayed to track number of rounds with inital value of 0
let roundsPlayed = 0;

showResults();

//Print playerWins, compWins and winner of game

if (playerWins === compWins) {
  console.log("You Tie! You both won " + playerWins + " games!");
} else if (playerWins > compWins) {
  console.log(
    "You Win! You won " +
      playerWins +
      " rounds and the Computer won " +
      compWins +
      " rounds."
  );
} else {
  console.log(
    "You Lose! You won " +
      playerWins +
      " rounds and the Computer won " +
      compWins +
      " rounds."
  );
}
