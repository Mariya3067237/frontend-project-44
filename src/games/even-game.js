import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';
const round = () => {
  const randomNumber = getRandomNumber();
  const checkParity = randomNumber % 2 === 0 ? "yes" : "no";
  const question = randomNumber;
  const correctAnswer = checkParity;
  return [question, correctAnswer];
};

export default () => game(description, round);
