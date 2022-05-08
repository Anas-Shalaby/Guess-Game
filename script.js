'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 12;secretNumber
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  // When there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No number!';
    displayMessage('😒 No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number';
    displayMessage('🥳 Correct Number');

    document.querySelector('body').style.backgroundColor = '#2f9e44';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? '😒 Too low !' : '🥲 Too high !';

      displayMessage(guess < secretNumber ? '😒 Too low !' : '🥲 Too high !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😊 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    document.querySelector('.guess').value = '';
  }
  // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🥲 Too high !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😊 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😒 Too low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😊 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = secretNumber;

  document.querySelector('.guess').value = '';
});
