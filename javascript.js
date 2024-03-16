//function that allows the computer to generate a random choice in the game (rock, paper or scissors)
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3 + 1);
    switch (computerChoice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }

}

console.log(getComputerChoice());