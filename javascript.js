//selection buttons
const rock = document.getElementById("rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let computerScore = 0;
let playerScore = 0;

if(playerScore < 5 || computerScore < 5)
{
rock.addEventListener("click", () => {
    playerSelection = "Rock";
});
rock.addEventListener("click", playGame);

paper.addEventListener("click", () => {
    playerSelection = "Paper";
});
paper.addEventListener("click", playGame);

scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
});
scissors.addEventListener("click", playGame);
}

//function that allows the computer to generate a random choice in the game (rock, paper or scissors)
function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3 + 1);
    switch (computerSelection) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }

}

const results = document.querySelector("div");
const playerSelectionParagraph = document.createElement("p");
const computerSelectionParagraph = document.createElement("p");
const result = document.createElement("p");
const currentScore = document.createElement("p");

result.style.backgroundColor = "aliceblue";
result.style.padding = "15px 15px";
result.style.border = "2px dashed white";
result.style.fontFamily = "cursive"
result.style.fontSize =  "25px";



results.append(result);
result.textContent = "To start the game click on one of the options.";



//function that plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {

    playerSelectionParagraph.textContent = `Your choice: ${playerSelection}`;
    computerSelectionParagraph.textContent = `Computer's choice: ${computerSelection}`;

    if(computerScore == 5){
        playerSelectionParagraph.textContent = ``;
        computerSelectionParagraph.textContent = ``;
        result.textContent = `To start the next round click on one of the options`;
        computerScore = 0;
        playerScore = 0;
        alert("The computer has 5 points! You lost the game!");
        return;
    }
    else if(playerScore == 5){
        playerSelectionParagraph.textContent = ``;
        computerSelectionParagraph.textContent = ``;
        result.textContent = `To start the next round click on one of the options`;
        computerScore = 0;
        playerScore = 0;
        alert("You have 5 points! You won the game!");
        return;
    }
 
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie! Your current score: ${playerScore}`;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection == 'Rock') {
        result.textContent =  `You lost this round! Computer won! Your current score: ${playerScore}`;
        computerScore += 1;
    }
    else {
        result.textContent = `You won this round! Congratulations! Your current score: ${playerScore}`;
        playerScore += 1;
    }

    result.append(playerSelectionParagraph);
    result.append(computerSelectionParagraph);
    //results.append(result);
    //results.append(currentScore);

}

//function that plays 5 rounds of the game
function playGame() {

        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

}



