function computerPlay() {
// math.random generates a number between 0 & 1, multiplied by 3 since there are three possible selections, math.ceil rounds up to nearest whole number     
    let random = Math.ceil(Math.random() * 3);
    if(random === 1) {
        return 'rock';
    } else if(random === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
    
}

function playRound(playerSelection, computerSelection) {
    //player win conditions
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! Rock crushes scissors.`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! Paper covers Rock.`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! Scissors cut Paper.`;
    //player lose conditions
    } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
        return `You Lose! Rock crushes scissors.`;
    } else if(computerSelection === 'paper' && playerSelection === 'rock') {
        return `You Lose! Paper covers Rock.`;
    } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        return `You Lose! Scissors cut Paper.`;
    //game results in a draw
    } else if(computerSelection === playerSelection) {
        return `Draw! Play again.`
    }
}

let playerSelection = prompt('please select either: rock paper or scissors');
playerSelection = playerSelection.toLowerCase();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));