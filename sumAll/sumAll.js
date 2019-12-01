const sumAll = function(a, b) {
	// Test for invalid arguments
	if (a <= 0 || b <= 0) {
		return "ERROR";
	}
	if (parseInt(a) !== a || parseInt(b) !== b) {
		return "ERROR";
	}
	// Define variables
	let all = [];
	let i, n;
	// Figure out which argument is smaller
	if (a < b) {
		i = a;
		n = b;
	} else {
		i = b;
		n = a;
	}
	// Create array of all numbers in range
	for (; i <= n; i++) {
		all.push(i);
	}
	// Sum up numbers in range and return sum
	let sum = all.reduce((x, y) => x += y);
	return sum;
}

module.exports = sumAll
