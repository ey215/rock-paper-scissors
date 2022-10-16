//Create variable type string named compPick with the intial value ""

compPick = "";

//Create function getComputerChoice that returns either "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    //Create variable num wity type integer and intial value of 0
    let num = 0;
    //Create variable pick type string and intitial value of ""
    let pick = "";

    //Create function getRandomInt to return integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //Set num to result of getRandomInt with argument of 3

    num = getRandomInt(3);
    return num;

    //Use if/else to set pick to either "Rock", "Paper", or "Scissors" based on int in num 
}


//set compPick to result of getComputerChoice
console.log(getComputerChoice());