import { readUserInput, getRandomNumber } from '../../functions';
import inNumberEven from './functions';
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
