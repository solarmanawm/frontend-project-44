import { readUserInput } from './functions.js';
import commonMessages from './messages.js';

/**
 * @typedef {{
 *  correct: any;
 *  current: any;
 * }} RoundResult
 */

/**
 *
 * @typedef {{
 *  description: string;
 *  steps: number;
 *  executeRound: () => RoundResult;
 * }} Options
 */

/**
 * @param {Options} options
 */
export const makeGame = (options) => {
  const { description, steps, executeRound } = options;
  const MAX_STEPS = 3;
  const concreteSteps = steps > MAX_STEPS ? MAX_STEPS : steps;

  let areAllCorrect = true;

  console.log(commonMessages.welcome);

  const name = readUserInput(commonMessages.questionName);

  console.log(commonMessages.greeting.replace('##name##', name));
  console.log(description);

  for (let i = 0; i < concreteSteps; i += 1) {
    const { current, correct } = executeRound();

    areAllCorrect = areAllCorrect && current === correct;

    if (areAllCorrect) {
      console.log(commonMessages.answer.correct);
    } else {
      console.log(commonMessages.answer.incorrect.replace('##correct##', correct).replace('##incorrect##', current));
      console.log(commonMessages.tryAgain.replace('##name##', name));
      break;
    }
  }

  if (areAllCorrect) {
    console.log(commonMessages.congratulations.replace('##name##', name));
  }
};

/**
 * @param {*} current
 * @param {*} correct
 * @returns {RoundResult}
 */
export const makeAnswer = (current, correct) => ({
  current,
  correct,
});
