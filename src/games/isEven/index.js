/* eslint-disable import/extensions */

import { readUserInput, getRandomNumber } from '../../functions.js';
import inNumberEven from './functions.js';
import messages from './messages.js';
import commonMessages from '../../messages.js';
import { makeGame, makeAnswer } from '../../index.js';

/**
 * @param {number} [steps=3]
 */
export default (steps = 3) => {
  const options = {
    description: messages.description,
    steps,
    executeRound: () => {
      const number = getRandomNumber();
      const isEven = inNumberEven(number);

      console.log(`${commonMessages.question}${number}`);

      const userInput = readUserInput(commonMessages.yourAnswer);
      const answer = userInput === messages.yes ? messages.yes : messages.no;
      const correct = isEven ? messages.yes : messages.no;

      return makeAnswer(answer, correct);
    },
  };

  makeGame(options);
};
