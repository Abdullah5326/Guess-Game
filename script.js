'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);

01: when we win the high will be add to highscore as var.
02: We should create a variable which has the vlaue of 0;
03: When we win the value shouuld become the value of random no
04: after we check the if the value of random score is greater than high score the value of high score becomes the random number. 
*/

let secretScore = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.number').textContent = secretScore;
let totalHighScore = 20;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
document.querySelector('.score').textContent = totalHighScore;
document.querySelector('.check').addEventListener('click', function () {
  const score = Number(document.querySelector('.guess').value);
  // When there is no score
  if (!score) {
    document.querySelector('.message').textContent = '⛔ No number!';
    // when person wins
  } else if (secretScore === score) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretScore;
    // Implementing High Score
    if (secretScore > highScore) {
      highScore = totalHighScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When score is too low
  } else if (secretScore < score) {
    if (totalHighScore === 0) {
      document.querySelector('.message').textContent = '🔥 You lost the game!';
    } else {
      document.querySelector('.message').textContent = '📈 To high!';
      totalHighScore--;
      document.querySelector('.score').textContent = totalHighScore;
      document.querySelector('body').style.backgroundColor = '#222';
    }
    // When score is too high
  } else if (secretScore > score) {
    if (totalHighScore === 0) {
      document.querySelector('.message').textContent = '🔥 You lost the game!';
    } else {
      document.querySelector('.message').textContent = '📉 To low!';
      totalHighScore--;
      document.querySelector('.score').textContent = totalHighScore;
      document.querySelector('body').style.backgroundColor = '#222';
    }
  }
});
// Making to restore the game

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  totalHighScore = 20;
  document.querySelector('.score').textContent = totalHighScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretScore = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretScore;
});
