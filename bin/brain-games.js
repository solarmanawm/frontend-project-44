#!/usr/bin/env node
/* eslint-disable import/extensions */

import readUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = readUserName();
console.log(`Hello, ${name}!`);
