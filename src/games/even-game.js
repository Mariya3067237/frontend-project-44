import getRandomNumber from '../get-random-num.js';
import engineGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (checkNumber) => checkNumber % 2 === 0;
const getRoundData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engineGame(description, getRoundData);
