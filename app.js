// cache collection of DOM elements
let userScore = 0;
let aiScore = 0;
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

const userWin = () => {
    console.log('win');
    userScore++;
    userScore_span.innerHTML = userScore;
};

const userLose = () => {
    console.log('lose');
    aiScore++;
    aiScore_span.innerHTML = userScore;
}

const draw = () => {
    console.log('draw');
}

const game = (userChoice) => {
    const aiChoice = getAiChoice();
    console.log(`User Selected: ${userChoice}`);
    console.log(`Ai Selected: ${aiChoice}`);
    switch (userChoice + aiChoice) {
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            userWin();
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            userLose();
            break;
    }
}

const result = (userChoice, getAiChoice) => {
    let headline;
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