const startBtn = document.getElementById('start-btn');
const startScreen = document.querySelector('.start-screen');
const gameContainer = document.querySelector('.game-container');
const gameBoard = document.querySelector('.game-board');
const gameOverScreen = document.querySelector('.game-over-screen');
const resetBtn = document.getElementById('reset-btn');

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');

let score = 0;
let highScore = localStorage.getItem('highScore') || 0; 
let isGameOver = false;
let scored = false; 
let gameLoop; 

highScoreElement.textContent = `Recorde: ${highScore}`;

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

const jump = () => {

    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

function startGame() {

    clearInterval(gameLoop);

    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    isGameOver = false;
    scored = false;

    /* Reset do Mario */
    mario.style.bottom = '0px';
    mario.src = './Images/mario.gif';
    mario.style.width = '120px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';

    /* Reset do pipe */
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.right = '-80px';
    pipe.style.left = '';

    gameOverScreen.style.display = 'none';
    gameBoard.style.display = 'block';

    gameLoop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 111.86) {
            gameOver();
        }

        if (pipePosition <= 0 && !scored && !isGameOver) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
            scored = true;
        }

        if (pipePosition > window.innerWidth - 100) {
            scored = false;
        }
    }, 10);
}

function gameOver() {

    clearInterval(gameLoop);
    isGameOver = true;

    /* Para aparecer a tela de game over */
    gameOverScreen.style.display = 'flex';

    const pipePosition = pipe.offsetLeft;
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    mario.src = './Images/game-over.png';
    mario.style.width = '60px';
    mario.style.marginLeft = '45px';
    mario.style.bottom = `${marioPosition}px`;

    /* Para atualizar o recorde */
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); 
    }
    highScoreElement.textContent = `Recorde: ${highScore}`;
}

resetBtn.addEventListener('click', () => {
    startScreen.style.display = 'flex';
    gameContainer.style.display = 'none';

    isGameOver = false;
    scored = false;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;

    mario.style.bottom = '0px';
    mario.src = './Images/mario.gif';
    mario.style.width = '120px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';

    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.right = '-80px';
    pipe.style.left = '';

    clearInterval(gameLoop);
});

document.addEventListener('keydown', jump);
