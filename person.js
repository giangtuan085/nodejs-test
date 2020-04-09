const EventEmitter = require('events');


class Person extends EventEmitter {
	constructor(name) {
		super();
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

let tuanng = new Person('TuanNG');

const sum = () => {
	console.log('sum function' + ' ' + tuanng.name);
};

tuanng.on('name', sum);

tuanng.emit('name');