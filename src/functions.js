import readlineSync from 'readline-sync';

/**
 * @param {string} question
 * @returns {string}
 */
export const readUserInput = (question) => readlineSync.question(question);

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
