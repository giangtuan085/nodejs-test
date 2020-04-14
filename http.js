const http = require('http');

const server = http.createServer((req, res) => {
	console.log(`Request url: ${req.url}`);
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('text');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3k');