import getRandomNumber from '../get-random-num.js';
import game from '../index.js';

const description = 'Answer \'yes\' if number even otherwise answer \'no\'.';
const isEven = (checkNumber) => checkNumber % 2 === 0;
const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engineGame(description, getRoundData);
