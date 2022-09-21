'use strict';

// selecting class eleemtn
const palyer0El = document.querySelector('.player--0');
const palyer1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentscore = 0;
let activepalyer = 0;

// rolling dice Funcionality
btnRoll.addEventListener('click', function () {
  // generate random number
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for roll

  if (dice !== 1) {
    // add socre to current
    currentscore += dice;
    document.querySelector(`#current--${activepalyer}`).textContent =
      currentscore; //change later
  } else {
    // switch to next palyer
    document.querySelector(`#current--${activepalyer}`).textContent = 0;
    currentscore = 0;
    activepalyer = activepalyer === 0 ? 1 : 0;
    palyer0El.classList.toggle('player--active');
    palyer1El.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  // add current score to active Plaaye
  // check if score ofcurrent palyer is >=100
  // finish the game
  // switch to other player
});
