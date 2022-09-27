import { hello } from './cli.js';
import readlineSync from 'readline-sync';

const game = (gameDescription, question, correctAnswer) => {
    const name = hello();
    console.log(gameDescription);
    for (let i = 0; i < 3; i += 1) {
        let answer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (answer.toLowerCase !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
