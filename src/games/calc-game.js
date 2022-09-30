import { getRandomNumber } from '../get-random-num.js';
import game from '../index.js';

const description = 'What is the result of the expression?';
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const calc = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return Error;
  }
};

const getRoundData = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const operation = getRandomOperation();
  const question = `${numberOne} ${operation} ${numberTwo}`;
  const correctAnswer = String(calc(numberOne, numberTwo, operation));
  return [question, correctAnswer];
};

export default () => game(description, getRoundData);
