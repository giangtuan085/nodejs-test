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

// create Server
const server = http.createServer((req, res) => {
	console.log(`Request url: ${req.url}`);
	// serving data in file
	// serveContent(res, false, 'text/plain', '/example.txt');

	// serving html
	// serveContent(res, 'text/html', '/index.html');

	// serving json
	serveContent(res, true, 'application/json');
});

const serveContent = (res, json = false, contentType, file, encoding = 'utf8') => {
	res.writeHead(200, {'Content-type': contentType});
	if (json) {
		const obj = {
			name: 'cat',
			age: 12
		};
		res.end(JSON.stringify(obj));
	} else {
		const readStream = fs.createReadStream(__dirname + file, encoding);
		readStream.pipe(res);
	}
};

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3k');