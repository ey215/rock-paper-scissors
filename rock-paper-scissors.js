
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


//If statement to see if playerSelection and computerSelectin are equal
//If statement to return a string if player loses
//If statement to return a string if player wins

}

console.log(getComputerChoice());