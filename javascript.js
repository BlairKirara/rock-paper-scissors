//selection buttons
const rock = document.getElementById("rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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


//function that plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {

    playerSelectionParagraph.textContent = `Your choice: ${playerSelection}`;
    computerSelectionParagraph.textContent = `Computer's choice: ${computerSelection}`;
    
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection == 'Rock') {
        result.textContent =  "You lost! Computer won!";
    }
    else {
        result.textContent = "You won! Congratulations!";
    }

    result.append(playerSelectionParagraph);
    result.append(computerSelectionParagraph);
    results.append(result);

}

//function that plays 5 rounds of the game
function playGame() {

        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

}



