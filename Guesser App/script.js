let guessLength = prompt('Chose a Guess Length');
let gameLength = document.querySelector('.length');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let score = document.querySelector('.score');
let restart = document.querySelector('.again');
let message = document.querySelector('.message');
let highScore = document.querySelector('.highscore');
let number = randomNumber();

let gameHigh = 0;
let userValue = parseInt(0);

///////////////////////////////////////////////////////////////
guess.addEventListener('keyup', e => {
  userValue = guess.value;
});
check.addEventListener('click', e => {
  if (parseInt(userValue) === number) {
    document.body.style.backgroundColor = 'green';
    if (score.innerHTML > gameHigh) {
      gameHigh = score.innerHTML;
      highScore.innerHTML = gameHigh;
      messageString('Start A New Game');
    }
  } else if (parseInt(userValue) < number) {
    score.innerHTML--;
    messageString('Guess Is To Low');
  } else {
    score.innerHTML--;
    messageString('Guess Is To High');
  }

  if (parseInt(score.innerHTML) === 0) {
    check.addEventListener('click', () => {
      restartGame();
    });
  }
});

restart.addEventListener('click', () => {
  restartGame();
});

////////////////////////////////////////////////////////////////

function randomNumber() {
  let number = Math.floor(Math.random() * parseInt(guessLength) + 1);
  return number;
}

function messageString(string) {
  message.innerHTML = string;
}

function restartGame() {
  number = randomNumber();
  score.innerHTML = 20;
  document.body.style.backgroundColor = '#222';
  guess.value = '';
  messageString(`Select a Number Between 1 and ${guessLength}`);
}

gameLength.innerHTML = guessLength;
