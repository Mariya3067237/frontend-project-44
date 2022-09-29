import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const descriprion = 'Find the greatest common divisor of given numbers.';
const getGreatCommonDivider = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  let divider = minNum;
  for (let i = divider; i > 0; i -= 1) {
    if ((maxNum % i === 0) && (minNum % i === 0)) {
      divider = i;
      break;
    }
  } return divider;
};

const round = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGreatCommonDivider(num1, num2);
  return [question, String(correctAnswer)];
};

export default () => game(descriprion, round);
