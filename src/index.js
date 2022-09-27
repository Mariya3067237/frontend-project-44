import { hello } from './cli.js';
import readlineSync, { question } from 'readline-sync';

const game = () => {
    const name = hello();
    console.log(gameDescription);
    const getGameData = (question, correctAnswer) => {
    for (let i = 0; i > 3; i += 1) {
        const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            break;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
}
};

export default game;
