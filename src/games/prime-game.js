import getRandomNumber from '../get-random-num.js';
import engineGame from '../index.js';

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
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
  const number = getRandomNumber();
  const question = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engineGame(description, getRoundData);
