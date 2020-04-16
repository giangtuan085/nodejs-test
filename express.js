const expModule = require('express');
const bodyParser = require('body-parser');

// fire function
const express = expModule();

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
express.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username);
})
 
// POST /api/users gets JSON bodies
express.post('/api/users', jsonParser, function (req, res) {
	// create user in req.body
	console.log('/api/users, requested');
})

// handle request
express.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// middleware
// express.use('/assets', (req, res, next) => {
// });

express.use('/assets', expModule.static('assets'));

express.get('/cat', (req, res) => {
	res.send('cat page');
});

express.get('/cat/:name', (req, res) => {
	res.send(`cat name is : ${req.params.name}`);
});


// const serveContent = (res, json = false, contentType, file = '', encoding = 'utf8') => {
// 	res.writeHead(200, {'Content-type': contentType});
// 	if (json) {
// 		const obj = {
// 			name: 'cat',
// 			age: 12
// 		};
// 		res.end(JSON.stringify(obj));
// 	} else {
// 		const readStream = fs.createReadStream(__dirname + file, encoding);
// 		readStream.pipe(res);
// 	}
// };

express.listen(3000);
console.log('Now listening to port 3k');