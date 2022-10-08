#!/usr/bin/env node

import readlineSync from 'readline-sync';

const NUMBERS_QUANTITY = 3;
const NUMBER_MIN = 10;
const NUMBER_MAX = 99;

/**
 * @type {{no: string, yes: string}}
 */
const ANSWER = {
  yes: 'yes',
  no: 'no',
};

/**
 * @type {{valid: string, invalid: string}}
 */
const MESSAGE = {
  valid: 'Correct!',
  invalid: '"%s0" is a wrong answer ;(. Correct answer was "%s1".',
};

const { log } = console;

/**
 * Read an answer.
 * @returns {string}
 */
const readAnswer = () => readlineSync.question('Your answer: ').toString();

/**
 * Get a certain correct answer.
 * @param {number} num
 * @returns {string}
 */
const getCorrectAnswer = (num) => (num % 2 === 0 ? ANSWER.yes : ANSWER.no);

/**
 * Get a error message.
 * @param {string} user
 * @returns {function(*, *): string}
 */
const getInvalidMessage = (user) => (answer, correctAnswer) => {
  const baseString = [answer, correctAnswer].reduce((string, item, index) => string.replace(`%s${index}`, item), MESSAGE.invalid);

  return `${baseString}\nLet's try again, ${user}!`;
};

/**
 * Check an answer for correctness.
 * @param {string} answer
 * @param {string} correctAnswer
 * @returns {boolean}
 */
const checkAnswer = (answer, correctAnswer) => (answer === correctAnswer);

/**
 * Generate an array of numbers.
 * @returns {number[]}
 */
const generateNumbers = () => Array(NUMBERS_QUANTITY)
  .fill(0)
  .map(() => Math.ceil(Math.random() * (NUMBER_MAX - NUMBER_MIN) + NUMBER_MIN));

const main = () => {
  log('Welcome to the Brain Games!');

  const user = readlineSync.question('May I have your name? ').toString();
  const eventNumbers = generateNumbers();

  log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < NUMBERS_QUANTITY; i += 1) {
    log(`Question: ${eventNumbers[i]}`);

    const generateInvalidMessage = getInvalidMessage(user);
    const answer = readAnswer();
    const correctAnswer = getCorrectAnswer(eventNumbers[i]);
    const isAnswerCorrect = checkAnswer(answer, correctAnswer);

    if (isAnswerCorrect) {
      log(MESSAGE.valid);
    } else {
      log(generateInvalidMessage(answer, correctAnswer));

      return;
    }
  }

  log(`Congratulations, ${user}!`);
};

main();
