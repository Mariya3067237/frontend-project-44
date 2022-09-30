import readlineSync from 'readline-sync';
import { hello } from './greeting.js';

const game = (description, getRoundData) => {
  const name = hello();
  console.log(description);
  let roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData();
    let answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    answer = answer.toLowerCase();
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
