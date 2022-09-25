import readlineSync from 'readline-sync';

export const hello = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    return name;
};

export const getRandomNumber = () => Math.ceil(Math.random()*100);

export const getRandomOperation = () => {
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
};
