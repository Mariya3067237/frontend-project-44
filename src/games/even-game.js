import { getRandomNumber } from '../cli.js';
import { hello } from '../cli.js';
import readlineSync from 'readline-sync';

export const evenGame = () => {
    const name = hello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
        if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
        }
        const randomNumber = getRandomNumber();
        const checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
        const result = checkParity;
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer.toLowerCase === result) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`); 
            break;
        }

    }
    
};

