const http = require('http');
const fs = require('fs');

// emit read stream event
// const readStream = fs.createReadStream(__dirname + '/example.txt', 'utf8');
// const writeStream = fs.createWriteStream(__dirname + '/writeStream.txt');

// on read stream data event
// readStream.on('data', (data) => {
// 	console.log('New chunk received:');
// 	writeStream.write(data);
// });

const server = http.createServer((req, res) => {
	console.log(`Request url: ${req.url}`);
	res.writeHead(200, {'Content-type': 'text/plain'});
	const readStream = fs.createReadStream(__dirname + '/example.txt', 'utf8');
	readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3k');