/** Readline module */

// import
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
																		 output: process.stdout});
// math question and answer
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

const onClose = () => {
	console.log('Correct!!!!!!');
};

// user input
rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
	if (+userInput.trim() === answer) {
		rl.close();
	} else {
		rl.setPrompt('Incorrect, try again \n');
		rl.prompt();
		rl.on('line', (input) => {
			if (+input.trim() === answer) {
				rl.close();
			} else {
				rl.setPrompt('Incorrect again \n');
				rl.prompt();
			}
		});
	}
});

rl.on('close', onClose);