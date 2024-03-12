import { getRandomNumber } from '../../functions.js';

const expressions = /** @type {const} */ ({
    add: 'add',
    subtract: 'subtract',
    multiply: 'multiply',
});

const expressionKeys = Object.keys(expressions);

const expressionFns = /** @type {const} */({
    [expressions.add]: (o1, o2) => o1 + o2,
    [expressions.subtract]: (o1, o2) => o1 - o2,
    [expressions.multiply]: (o1, o2) => o1 * o2,
});

const expressionSigns = /** @type {const} */ ({
    [expressions.add]: '+',
    [expressions.subtract]: '-',
    [expressions.multiply]: '*',
});
/**
 * @returns {string}
 */
export const getRandomExpression = () => {
    const expressionIndex = getRandomNumber(0, 2);

    return expressions[expressionKeys[expressionIndex]];
};

/**
 * 
 * @param {string} expression
 * @returns {(o1: number, o2: number) => number}
 */
export const getExpressionFn = (expression) => {
    return expressionFns[expression];
}

/**
 * @param {string} expression
 * @returns {string}
 */
export const getExpressionSign = (expression) => {
    return expressionSigns[expression];
};