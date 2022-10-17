import readlineSync from 'readline-sync';

const NUM_MIN = 10;
const NUM_MAX = 99;
export const ROUNDS = 3;

/**
 * @type {{valid: string, invalid: string}}
 */
const MESSAGE = {
  valid: 'Correct!',
  invalid: '"%s0" is a wrong answer ;(. Correct answer was "%s1".',
};

/**
 * Read an answer.
 * @returns {string}
 */
const readAnswer = () => readlineSync.question('Your answer: ').toString();

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
 * @param {string} user
 * @param {string} answer
 * @param {string} correctAnswer
 * @returns {{isAnswerCorrect: boolean, message: (string|*)}}
 */
const checkAnswer = (user, answer, correctAnswer) => {
  const generateInvalidMessage = getInvalidMessage(user);
  const isAnswerCorrect = answer === correctAnswer;

  return {
    isAnswerCorrect,
    message: isAnswerCorrect ? MESSAGE.valid : generateInvalidMessage(answer, correctAnswer),
  };
};

/**
 * Generate a random number from range.
 * @param {number|null} _min
 * @param {number|null} _max
 * @returns {number}
 */
export const generateNumber = (_min = null, _max = null) => {
  const min = _min === null ? NUM_MIN : _min;
  const max = _max === null ? NUM_MAX : _max;

  return Math.ceil(Math.random() * (max - min) + min);
};

/**
 * The Main function
 * @param {() => {question: string, correctAnswer: string}} callback
 */
export const main = (title, callback) => {
  const { log: l } = console;

  l('Welcome to the Brain Games!');

  const user = readlineSync.question('May I have your name? ').toString();

  l(title);

  for (let i = 0; i < ROUNDS; i += 1) {
    const { question, correctAnswer } = callback();

    l(question);

    const answer = readAnswer();
    const { isAnswerCorrect, message } = checkAnswer(user, answer, correctAnswer);

    l(message);

    if (!isAnswerCorrect) {
      return;
    }
  }

  l(`Congratulations, ${user}!`);
};
