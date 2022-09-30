import getRandomNumber from '../get-random-num.js';
import game from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = (startNum, step, length) => {
  const arr = [startNum];
  let elem = startNum;
  for (let i = 1; i < length; i += 1) {
    elem += step;
    arr.push(elem);
  }
  return arr;
};

const getRoundData = () => {
  const startNum = getRandomNumber();
  const progressionStep = getRandomNumber(1, 10);
  const lengthProgression = getRandomNumber(5, 10);
  const progressionRound = getProgression(startNum, progressionStep, lengthProgression);
  const emptyIndex = getRandomNumber(1, progressionRound.length) - 1;
  const correctAnswer = String(progressionRound[emptyIndex]);
  progressionRound[emptyIndex] = '..';
  const question = `${progressionRound.join(' ')}`;
  return [question, correctAnswer];
};

export default () => game(description, getRoundData);
