import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const description = 'What number is missing in the progression?';
const progression = (startNum, step, length) => {
  const arr = [startNum];
  let elem = startNum;
  for (let i = 1; i < length; i += 1) {
    elem += step;
    arr.push(elem);
  }
  return arr;
};

const round = () => {
  const startNum = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progressionRound = progression(startNum, step, length);
  const empty = getRandomNumber(1, progressionRound.length);
  const correctAnswer = String(progressionRound[empty - 1]);
  progressionRound[empty - 1] = '..';
  const question = `${progressionRound.join(' ')}`;
  return [question, correctAnswer];
};

export default () => game(description, round);
