const sum = (var1, var2) => var1 + var2;

class someClass {
	constructor() {
		console.log('Object created');
	}
}

module.exports.sum = sum;
module.exports.someClass = someClass;