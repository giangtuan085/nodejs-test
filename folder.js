const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
																		 output: process.stdout});
let input = 'n';

const onClose = () => {
	if (input === 'y') {
		console.log('Deleted folder \n');
	} else {
		console.log('Not delete folder \n');
	}
};

rl.on('close', onClose);

// create folder. cannot create duplicate name
// fs.mkdir('tutorial', (err) => {
// 	if (err)
// 		console.log(err);
// 	else {
// 		console.log('Successfully created folder');
// 		// writeFile();
// 		// deleteFolder();
// 	}
// });


// confirm delete folder
const deleteFolder = () => {
	rl.question(`Do you want to delete folder? Yes(y) No(n) \n`, (userInput) => {
		if (userInput.trim() === 'y') {
			fs.rmdir('tutorial', (err) => {
				if (err) {
					console.log(err);
				} else {
					input = userInput;
					rl.close();
				}
			});

		} else if (userInput.trim() === 'n') {
			rl.close();
		}
	});
};

// add file
const writeFile = () => {
	fs.writeFile('./tutorial/example.txt', 'Test information', (err) => {
		if (err)
			console.error(err);
		else {
			console.log('Successfully write file');
		}
	});
};

// remove file
const unlink = () => {
	fs.unlink('./tutorial/example.txt', (err) => {
		if (err)
			console.error(err);
		else {
			deleteFolder();
		}
	});
};
// readdir > get array of files > run unlink

unlink();
