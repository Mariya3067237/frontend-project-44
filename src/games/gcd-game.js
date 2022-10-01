import getRandomNumber from '../get-random-num.js';
import game from '../index.js';

const descriprion = 'Find the greatest common divisor of given numbers.';
const getGreatCommonDivider = (num1, num2) => {
  if (num2) {
    return getGreatCommonDivider(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getRoundData = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = getGreatCommonDivider(numberOne, numberTwo);
  return [question, String(correctAnswer)];
};

export default () => engineGame(description, getRoundData);
