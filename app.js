// cache collection of DOM elements
const userScore = 0;
const aiScore = 0;
const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');
const scoreboard_div = document.querySelector('.scoreboard');
const game_status_div = document.querySelector('.game-status');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


const getAiChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * Math.floor(choices.length))];
    return aiChoice;
}

const game = (userChoice) => {
    console.log(`User Selected: ${userChoice}`);
    console.log(getAiChoice());
}

// event listeners
const main = () => {
    rock_div.addEventListener('click', () => {
        game("rock");
    });
    paper_div.addEventListener('click', () => {
        game("paper");
    });
    scissors_div.addEventListener('click', () => {
        game("scissors");
    });
}

main();