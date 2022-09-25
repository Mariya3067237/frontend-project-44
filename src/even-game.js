import { getRandomNumber } from '../src/cli.js';
import { hello } from '../src/cli.js';
import readlineSync from 'readline-sync';

export const evenGame = () => {
    const name = hello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const checkParity = (checkNumber) => {
        if (checkNumber % 2 === 0) {
            return 'yes';
        }
        return 'no';
    }
    
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomNumber();
        console.log(`Question: ${randomNumber}`);
        const result = checkParity(randomNumber);
        const answer = readlineSync.question('Your answer: ');
        if (answer.toLowerCase !== result) {
            console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`); 
            return;
        } else if (i === 3){
            console.log(`Congratulations, ${name}!`);
        } else {
            console.log('Correct!');
        }

    }
    
};
