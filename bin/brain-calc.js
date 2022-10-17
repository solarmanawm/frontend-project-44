#!/usr/bin/env node

import {
  generateNumber,
  main,
} from '../src/index.js';

/**
 * @type {{add: string, multiply: string, subtract: string}}
 */
const EXPRESSION = {
  add: '+',
  subtract: '-',
  multiply: '*',
};

/**
 * @type {{[p: string]: (numbers: number[]) => number}}
 */
const resultByExpression = {
  [EXPRESSION.add]: (numbers) => numbers[0] + numbers[1],
  [EXPRESSION.subtract]: (numbers) => numbers[0] - numbers[1],
  [EXPRESSION.multiply]: (numbers) => numbers[0] * numbers[1],
};

main('What is the result of the expression?', () => {
  const eventNumbers = Array(2).fill(0).map(() => generateNumber());
  const expIndex = generateNumber(0, 2);
  const exp = Object.values(EXPRESSION)[expIndex];
  const correctAnswer = resultByExpression[exp](eventNumbers).toString();
  const question = `Question: ${eventNumbers.join(` ${exp} `)}`;

  return {
    question,
    correctAnswer,
  };
});
