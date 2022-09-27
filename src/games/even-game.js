import { getRandomNumber } from '../cli.js';
import readlineSync, { question } from 'readline-sync';
import gameRun from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';

const getGameData = () => {
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const correctAnswer = checkParity();
    return {
        question : question,
        correctAnswer : correctAnswer
    }
};

export default () => gameRun(getGameData, gameDescription);

