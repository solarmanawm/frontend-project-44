import { readUserInput, getRandomNumber } from '../../../src/functions.js';
import { isPrime } from './functions.js';
import messages from './messages.js';
import commonMessages from '../../messages.js';
import { makeGame, makeAnswer } from '../../index.js';

/**
 * @param {number} [steps=3]
 */
export const main = (steps = 3) => {
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