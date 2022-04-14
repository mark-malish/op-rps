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

let playerScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(playerSelection, computerSelection) {
    //player win conditions
    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return `You Win! Rock crushes scissors. Player: ${playerScore} Computer: ${computerScore}`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You Win! Paper covers Rock. Player: ${playerScore} Computer: ${computerScore}`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You Win! Scissors cut Paper. Player: ${playerScore} Computer: ${computerScore}`;
    //player lose conditions
    } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return `You Lose! Rock crushes scissors. Player: ${playerScore} Computer: ${computerScore}`;
    } else if(computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return `You Lose! Paper covers Rock. Player: ${playerScore} Computer: ${computerScore}`;
    } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return `You Lose! Scissors cut Paper. Player: ${playerScore} Computer: ${computerScore}`;
    //game results in a draw
    } else if(computerSelection === playerSelection) {
        draw++;
        return `Draw! Play again. Player: ${playerScore} Computer: ${computerScore}`
    }
}
// plays 5 rounds and console logs the results of each round with score tally. after 5 rounds console logs win/lose/tie with scores for each contender

function game() {
    for(let i = 0; i < 5; i++) {
    let playerSelection = prompt('choose your weapon: rock paper or scissors');
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        console.log(`You Win. Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`);
    } else if(computerScore > playerScore) {
        console.log(`You Lose. Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`)
    } else if(playerScore === computerScore) {
        console.log(`Tie Game. Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`)
    }
}

game()