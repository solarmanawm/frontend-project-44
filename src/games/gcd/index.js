import { readUserInput, getRandomNumber } from '../../functions';
import calculateGcd from './functions';
import messages from './messages';
import commonMessages from '../../messages';
import { makeGame, makeAnswer } from '../../index';

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
