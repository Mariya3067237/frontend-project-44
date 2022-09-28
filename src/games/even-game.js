import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const round = () => {
    let randomNumber = getRandomNumber();
    let checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
    let question = randomNumber;
    let correctAnswer = checkParity;
    return [question, correctAnswer];
};

export default () => game(description, round);


