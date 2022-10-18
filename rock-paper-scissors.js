
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
    }

    else if (num === 1) {
        pick = "paper";
    }

    else {
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
        return "Both players selected " + playerSelection + ", play round again."; 
    }
    
    //Results if playerSelection is rock and computerSelection is different
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }
        else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }

    //Resuts if playerSelectin is paper and computerSelectin is different
    
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }

    //Results if playerSelction is scissors
    else {
        if (computerSelection === "rock") {
            return "You Lose! " + computerSelection + " beats " + playerSelection; 
        }

        else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }
}

//Create function game() which plays the game for 5 rounds and returns the result of each round and the winner
function game{
    
    //Create counting variable named playerWins type integer for player wins with intial value of 0
    //Create countign variable named compWins type integer for computer wins with inital value of 0
    //Create counting variable named roundsPlayed to track number of rounds with inital value of 0
    //Create variable type boolean keepGoing to crontrol loop with intital value of true
    let keepGoing = True;

    //Create While loop with controling variable keepGoing.  When keepGoing = false loop terminates.
    //Call playRound() to play a round
    //Use if/else statement to determine which counting variable to increment by 1 and increment roundsPlayed by 1
    //Print "Round n" + win/loss statement to console
    //When round = 5 set keepGoing to false
    //Pring playerWins, compWins and winner of game
    //Reset variables to initial values
    

}
 

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));