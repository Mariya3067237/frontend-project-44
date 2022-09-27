import { getRandomNumber } from '../cli.js';
import readlineSync from 'readline-sync';
import game from '../index.js';

export const evenGame = () => {
    const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
    let randomNumber = getRandomNumber();
    let checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
    let question = randomNumber;
    let correctAnswer = checkParity;
    game(gameDescription, question, correctAnswer);
};


