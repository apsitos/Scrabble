<<<<<<< HEAD
import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';

import './style.scss';

const application = <Application />;

render(application, document.getElementById('application'));
=======
function scoreWord(word, multiplier) {
  let score =
  word.trim().split('').reduce((sum, letter) => {
    const upperCase = letter.toUpperCase();
    return sum + letterScores[upperCase];
  }, 0 );
  if (multiplier) {
    return score * multiplier;
  };
  return score;
}

const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
}

module.exports = scoreWord
>>>>>>> e94f744ab0c46e4e947dfa7a5cb01e899b6d23ce
