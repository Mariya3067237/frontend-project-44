import { getRandomNumber } from '../src/cli.js';
import { hello } from '../src/cli.js';
import readlineSync from 'readline-sync';




export const evenGame = () => {
    const name = hello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
    
    for (let i = 0; i < 3; i += 1) {
        if (i === 3){
            console.log(`Congratulations, ${name}!`);
            return;
        }
        const checkParity = randomNumber % 2 === 0 ? 'yes' : 'no';
        const randomNumber = getRandomNumber();
        const result = checkParity(randomNumber);
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer.toLowerCase !== result) {
            console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${name}!`); 
            break;
        } else {
            console.log('Correct!');
        }

    }
    
};
