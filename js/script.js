const startBtn = document.getElementById('start-btn');
const startScreen = document.querySelector('.start-screen');
const gameContainer = document.querySelector('.game-container');

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

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

function startGame() {

    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    isGameOver = false;
    scored = false;

    mario.style.bottom = '0px';
    mario.src = './Images/mario.gif';
    mario.style.width = '120px';
    mario.style.marginLeft = '0px';

    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.right = '-80px';

    gameLoop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 111.86) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './Images/game-over.png';
            mario.style.width = '60px';
            mario.style.marginLeft = '45px';

            isGameOver = true;

            if (score > highScore) {
                highScore = score;
                localStorage.setItem('highScore', highScore); 
            }
            highScoreElement.textContent = `Recorde: ${highScore}`;
            clearInterval(gameLoop);
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

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

document.addEventListener('keydown', jump);

