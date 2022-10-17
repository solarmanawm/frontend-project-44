#!/usr/bin/env node

import {
  generateNumber,
  main,
} from '../src/index.js';

/**
 * @type {{no: string, yes: string}}
 */
const ANSWER = {
  yes: 'yes',
  no: 'no',
};

/**
 * Get a certain correct answer.
 * @param {number} num
 * @returns {string}
 */
const getCorrectAnswer = (num) => (num % 2 === 0 ? ANSWER.yes : ANSWER.no);

main('Answer "yes" if the number is even, otherwise answer "no".', () => {
  const num = generateNumber();
  const correctAnswer = getCorrectAnswer(num);

  return {
    question: `Question: ${num}`,
    correctAnswer,
  };
});
