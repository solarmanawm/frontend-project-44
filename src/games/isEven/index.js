import { readUserInput, getRandomNumber } from '../../../src/functions.js';
import { isEven as inNumberEven } from './isEven.js';
import messages from './messages.js';

/**
 * @param {number} steps
 */
export const main = (steps = 3) => {
    let areAllCorrect = true;

    console.log(messages.welcome);

    const name = readUserInput(messages.questionName);

    console.log(messages.greeting.replace('##name##', name));
    console.log(messages.description);

    for (let i = 0; i < steps; i++) {
        const number = getRandomNumber();
        const isEven = inNumberEven(number);

        console.log(`${messages.question}${number}`)

        const userInput = readUserInput(messages.yourAnswer);
        const answer = userInput === messages.yes ? messages.yes : messages.no;
        const correct = isEven ? messages.yes : messages.no;
        const incorrect = isEven ? messages.no : messages.yes;

        areAllCorrect = areAllCorrect && (correct === answer);

        if (areAllCorrect) {
            console.log(messages.answer.correct);
        } else {
            console.log(messages.answer.incorrect.replace('##correct##', correct).replace('##incorrect##', incorrect));
            console.log(messages.tryAgain.replace('##name##', name));
            break;
        }
    }

    if (areAllCorrect) {
        console.log(messages.congratulations.replace('##name##', name));
    }
}