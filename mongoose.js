const expModule = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri = "mongodb+srv://dbSoren:mcdonalds2905@sorencluster-hi4q3.mongodb.net/blog";
// Connect to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const catSchema = new mongoose.Schema({
	name: String
});

const Cat = mongoose.model('Cat', catSchema);
const catOne = Cat({name: 'Socks'}).save((err) => {
	if (err) throw err;
	console.log('saved');
});
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


express.listen(3000);
console.log('Now listening to port 3k');