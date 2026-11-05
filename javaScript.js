console.log("Hello world!")

let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultDiv = document.getElementById("result");
const p = document.createElement("p");

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    p.textContent = "";
    resultDiv.appendChild(p);
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resultDiv.textContent = "";
});


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


function playRound (humanSelection, computerSelection) {
    const humanChoice = humanSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            resultDiv.textContent=("You lose! Paper beats Rock.")
        }else if(computerChoice === "scissors"){
            humanScore++;
            resultDiv.textContent=("You win! Rock beats Scissors.")
        }else {
            resultDiv.textContent=("Draw!")
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++;
            resultDiv.textContent=("You lose! Scissors beats Paper.")
        }else if(computerChoice === "rock"){
            humanScore++;
            resultDiv.textContent=("You win! Paper beats Rock.")
        }else {
            resultDiv.textContent=("Draw!")
        }
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            resultDiv.textContent=("You lose! Rock beats Scissors.")
        }else if(computerChoice === "paper"){
            humanScore++;
            resultDiv.textContent= ("You win! Scissors beats Paper.")
        }else {
            resultDiv.textContent=("Draw!")
        }
    }
    p.textContent = (
        `Now hunman score is ${humanScore}, computer score is ${computerScore}`);
    resultDiv.appendChild(p);

    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            p.textContent+= (" You win the game!");
        }else {
            p.textContent+= (" You lose the game!");
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        return;
    }
}





