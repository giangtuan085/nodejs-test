const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const sum = (var1, var2) => {
	console.log(var1 + var2);
};

eventEmitter.on('tutorial', sum);

eventEmitter.emit('tutorial', 1, 7);

module.exports.eventBase = EventEmitter;