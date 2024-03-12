import { readUserInput, getRandomNumber } from '../../functions';
import isPrime from './functions';
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
      const num = getRandomNumber();
      const isNumberPrime = isPrime(num);

      console.log(`${commonMessages.question}${num}`);

      const userInput = readUserInput(commonMessages.yourAnswer);
      const answer = userInput === messages.yes ? messages.yes : messages.no;
      const correct = isNumberPrime ? messages.yes : messages.no;

      return makeAnswer(answer, correct);
    },
  };

  makeGame(options);
};
