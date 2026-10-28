console.log("Hello world!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const option = Math.floor(Math.random()*3);
    let computerChoice = 0 ;
    if(option === 0){
        computerChoice = "rock";
    }else if (option === 1) {
        computerChoice = "paper";
    }else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice (){
    let humanChoice = prompt("What is your choice?");
    return humanChoice;
}


function playRound (humanSelection, computerSelection) {
    const humanChoice = humanSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock.")
        }else if(computerChoice === "scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors.")
        }else {
            console.log("Draw!")
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper.")
        }else if(computerChoice === "rock"){
            humanScore++;
            console.log("You win! Paper beats Rock.")
        }else {
            console.log("Draw!")
        }
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors.")
        }else if(computerChoice === "paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper.")
        }else {
            console.log("Draw!")
        }
    }
    console.log(`Now hunman score is ${humanScore}, computer score is ${computerScore}`);
    return;
}

function playGame (){
    for(let i = 0; i <5 ; i++){
        console.log(`------This is ${i+1} round!-------`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Game End!")
    if(computerScore < humanScore){
        console.log("You win!")
    }else if( computerScore > humanScore){
        console.log("Computer Win!")
    }else {
        console.log("Draw Game!")
    }
}
playGame()



