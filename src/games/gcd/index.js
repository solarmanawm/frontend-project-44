import { readUserInput, getRandomNumber } from '../../functions.js';
import calculateGcd from './functions.js';
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
      const a = getRandomNumber();
      const b = getRandomNumber();
      const gcd = calculateGcd(a, b);

      console.log(`${commonMessages.question}${a} ${b}`);

      const answer = +readUserInput(commonMessages.yourAnswer);

      return makeAnswer(answer, gcd);
    },
  };

  makeGame(options);
};
