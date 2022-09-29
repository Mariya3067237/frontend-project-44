import { getRandomNumber } from '../cli.js';
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
  }
};

const round = () => {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let operation = getRandomOperation();
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calc(num1, num2, operation));
  return [question, correctAnswer];
};

export default () => game(description, round);
