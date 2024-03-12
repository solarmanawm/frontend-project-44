#!/usr/bin/env node

import readUserName from '../src/cli';

console.log('Welcome to the Brain Games!');

const name = readUserName();
console.log(`Hello, ${name}!`);
