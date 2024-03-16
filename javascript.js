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

//function to make sure the first letter is upper case and the rest is lower case
function changeCase(choice) {
    choice.toLowerCase();
    firstLetter = choice.slice(0, 1);
    restOfString = choice.slice(1);
    return firstLetter.toUpperCase() + restOfString.toLowerCase();
}

//function that checks if the player entered a correct value
function validatePlayerChoice(playerSelection) {
    if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
        validChoice = true;
    }
    else {
        validChoice = false;
    }
    return validChoice;
}

//function that plays a single round of Rock, Paper, Scissors
function playGame(playerSelection, computerSelection) {
    playerSelection = prompt("Please choose rock, paper or scissors: ");
    playerSelection = changeCase(playerSelection);
    validChoice = validatePlayerChoice(playerSelection);
    while (validChoice != true) {
        playerSelection = prompt("The value is incorrect.\nPlease enter 'Rock', 'Paper' or 'Scissors': ");
        playerSelection = changeCase(playerSelection);
        validChoice = validatePlayerChoice;
    }
    console.log(playerSelection);
}

console.log(getComputerChoice());
playGame();