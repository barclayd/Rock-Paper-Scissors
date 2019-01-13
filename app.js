// cache collection of DOM elements
let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');
const scoreboard_div = document.querySelector('.scoreboard');
const game_status_div_p = document.querySelector('.game_status > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// text
const playerNameUser = "(user)".fontsize(3).sup();
const playerNameAi = "(ai)".fontsize(3).sup();

const getAiChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const aiChoice = choices[Math.floor(Math.random() * Math.floor(choices.length))];
    return aiChoice;
}

const userWin = (userChoice, aiChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    game_status_div_p.innerHTML = (`${userChoice} ${playerNameUser} beats ${aiChoice} ${playerNameAi}, you win! 👍🏼`);
};

const userLose = (userChoice, aiChoice) => {
    aiScore++;
    aiScore_span.innerHTML = aiScore;
    game_status_div_p.innerHTML = (`${aiChoice} ${playerNameAi} beats ${userChoice} ${playerNameUser}, you lose! 👎🏼`);

}

const draw = (userChoice, aiChoice) => {
    game_status_div_p.innerHTML = (`${userChoice} ${playerNameUser} matches ${aiChoice} ${playerNameAi}, go again 👊🏼`);

}

const game = (userChoice) => {
    const aiChoice = getAiChoice();
    console.log(`User Selected: ${userChoice}`);
    console.log(`Ai Selected: ${aiChoice}`);
    switch (userChoice + aiChoice) {
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            draw(userChoice, aiChoice);
            break;
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            userWin(userChoice, aiChoice);
            break;
        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            userLose(userChoice, aiChoice);
            break;
    }
}

const result = (userChoice, getAiChoice) => {
    let headline;
}

// event listeners
const main = () => {
    rock_div.addEventListener('click', () => {
        game("Rock");
    });
    paper_div.addEventListener('click', () => {
        game("Paper");
    });
    scissors_div.addEventListener('click', () => {
        game("Scissors");
    });
}

main();