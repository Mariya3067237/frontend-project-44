import { getRandomNumber } from '../get-random-num.js';
import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (checkNumber) => checkNumber % 2 === 0;
const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(description, getRoundData);
