const fibonacci = function(n) {
	if (n < 0) {return "OOPS";}
	let x = 0, y = 1, z = 0;
	for (let i = 0; i < n; i++) {
		z = x + y; // x = 0, y = 1, z = 1
		x = y;
		y = z;
	}
	return x;
}

module.exports = fibonacci
