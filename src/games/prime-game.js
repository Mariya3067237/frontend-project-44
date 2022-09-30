import { getRandomNumber } from '../get-random-num.js';
import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => game(description, getRoundData);
