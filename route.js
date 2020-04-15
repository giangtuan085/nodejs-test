const http = require('http');
const fs = require('fs');


// create Server
const server = http.createServer((req, res) => {
	console.log(`Request url: ${req.url}`);
	if (req.url === '/api/cat') {
		serveContent(res, true, 'application/json');
	} else if (req.url === '/home') {
		serveContent(res, false, 'text/html', '/index.html');
	} else {
		serveContent(res, false, 'text/html', '/error.html');
	}
});

const serveContent = (res, json = false, contentType, file = '', encoding = 'utf8') => {
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