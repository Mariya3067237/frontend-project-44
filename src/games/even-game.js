import { getRandomNumber } from '../cli.js';
import readlineSync from 'readline-sync';
import game from '../index.js';

export const evenGame = () => {
    const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
    const randomNumber = getRandomNumber();
    const checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
    const question = randomNumber;
    const correctAnswer = checkParity();
    game();
};


