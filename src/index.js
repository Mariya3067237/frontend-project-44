import { hello } from './cli.js';
import readlineSync from 'readline-sync';

const game = (gameDescription, question, correctAnswer) => {
    const name = hello();
    console.log(gameDescription);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    for (let i = 0; i < 3; i += 1) {
        console.log(answer);
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!'); 
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
