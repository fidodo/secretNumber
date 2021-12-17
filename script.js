
'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; /* state variable*/
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //when no number input
  if (!guess) {
    document.querySelector('.message').textContent = 'Input a Number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Guess to High' : 'Guess to low';
      score--;
      document.querySelector('.score').textContent = score;

      //when the score run down to zero
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when input is greater than the secretNumber
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Guess to high!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     //when the score run down to zero
//   } else {
//     document.querySelector('.message').textContent = 'Game Over!';
//     document.querySelector('.score').textContent = 0;
//   }

//   //when score is less than secretNumber
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Guess to low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     // when score is low for the other scenario
//   } else {
//     document.querySelector('.message').textContent = 'Game Over!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

//i did this easy enough, function has no name anonymous function 'again button'
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
