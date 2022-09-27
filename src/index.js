import { hello } from './cli.js';
import readlineSync from 'readline-sync';

const game = (gameDescription, question, correctAnswer) => {
    const name = hello();
    console.log(gameDescription);
    let answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    let i = 0;
    while (i < 3) {
        console.log(answer);
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
        i += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
