import { readUserInput, getRandomNumber } from '../../functions';
import { getRandomExpression, getExpressionFn, getExpressionSign } from './functions';
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
      const operand1 = getRandomNumber();
      const operand2 = getRandomNumber();
      const expression = getRandomExpression();
      const expressionFn = getExpressionFn(expression);
      const expressionString = `${operand1} ${getExpressionSign(expression)} ${operand2}`;
      const expressionResult = expressionFn(operand1, operand2);

      console.log(`${commonMessages.question}${expressionString}`);

      const answer = +readUserInput(commonMessages.yourAnswer);

      return makeAnswer(answer, expressionResult);
    },
  };

  makeGame(options);
};
