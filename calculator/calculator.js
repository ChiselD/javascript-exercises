function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	let sum = 0;
	arr.forEach(x => sum += x);
	return sum;
}

function multiply (arr) {
	let result = arr[0];
	for (let i = 1; i < arr.length; i++) {
		result *= arr[i];
	}
	return result;
}

function power(x, y) {
	return x**y;
}

function factorial(x) {
	if (x === 0) return 1;
	else {
		let sum = x;
		for (let i = x-1; i > 0; i--) {
			sum *= i;
		}
		return sum;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}