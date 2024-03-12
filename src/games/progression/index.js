import { readUserInput, getRandomNumber } from '../../functions';
import generateArithmeticProgression from './functions';
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
      const start = getRandomNumber(1, 10);
      const diff = getRandomNumber(1, 5);
      const count = getRandomNumber(5, 10);
      const progression = generateArithmeticProgression(start, diff, count);
      const hiddenValueIndex = getRandomNumber(0, count - 1);
      const hiddenValue = progression[hiddenValueIndex];
      progression[hiddenValueIndex] = '..';

      console.log(`${commonMessages.question}${progression.join(' ')}`);

      const answer = +readUserInput(commonMessages.yourAnswer);

      return makeAnswer(answer, hiddenValue);
    },
  };

  makeGame(options);
};
