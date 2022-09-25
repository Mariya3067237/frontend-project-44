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
    
    let i = 0;
    while (i < 3) {
        const randomNumber = getRandomNumber();
        console.log(`Question: ${randomNumber}`);
        const result = checkParity(randomNumber);
        const answer = readlineSync.question('Your answer: ');
        
        console.log('Correct!');
        
    }
    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    }
    
};
