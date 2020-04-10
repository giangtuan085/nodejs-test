const fs = require('fs');

/** CRUD file */

// create file
fs.writeFile('example.txt', 'Example text', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('File successfully created');
		fs.readFile('example.txt', 'utf8', (err, file) => {
			if (err) {
				console.error(err);
			} else {
				console.log(file);
			}
		});
	}
});

// rename file
// fs.rename('example.txt', 'example2.txt', (err) => {
// 	if (!err)
// 		console.log('Successfully renamed file');
// });

// append new data to the file
// fs.appendFile('example2.txt', ' New appended data', (err) => {
// 	if (!err)
// 		console.log('Successfully appended data');
// });

// delete file
// fs.unlink('example2.txt', (err) => {
// 	if (!err)
// 		console.log('Successfully deleted file');
// });

