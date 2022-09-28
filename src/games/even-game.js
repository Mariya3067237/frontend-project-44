import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const gameData = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    let randomNumber = getRandomNumber();
    let checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
    let question = randomNumber;
    let correctAnswer = checkParity;
    return [question, correctAnswer];
};

export default () => game(gameData, description);


