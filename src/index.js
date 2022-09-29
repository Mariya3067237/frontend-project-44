import { hello } from './cli.js';
import readlineSync from 'readline-sync';

const game = (description, round) => {
    const name = hello();
    console.log(description);
    for (let i = 0; i < 3; i += 1) {
        const [question, correctAnswer] = round();
        let answer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (answer !== correctAnswer || answer.toLowerCase() !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
