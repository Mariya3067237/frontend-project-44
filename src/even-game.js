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
        let randomNumber = getRandomNumber();
        console.log(`Question: ${checkNumber}`);
        let result = checkParity(checkNumber);
        let answer = readlineSync.question('Your answer: ');
        if (answer.toLowerCase !== result) {
            console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`); 
            return;
        }
        i += 1;
        console.log('Correct!');
        
    }
    if (i === 3) {
        console.log(`Congratulations, ${name}!`);
    }
    
};
