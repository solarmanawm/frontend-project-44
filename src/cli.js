import readlineSync from 'readline-sync';

export const readUserName = () => {
    const name = readlineSync.question('May I have your name? ');

    return name;
}