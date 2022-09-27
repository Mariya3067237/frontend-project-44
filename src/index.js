import { hello } from './cli.js';
import readlineSync from 'readline-sync';

const game = (gameDescription, question, correctAnswer) => {
    const name = hello();
    console.log(gameDescription);
    let answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    for (let i = 0; i < 3; i += 1) {
        if (i = 3) {
            console.log(`Congratulations, ${name}!`);
          }
        console.log(answer);
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!'); 
  }
};

export default game;
