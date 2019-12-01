const ftoc = function(n) {
	const a = (n - 32) * (5/9);
	const b = parseFloat(a.toFixed(1));
	return b;
}

const ctof = function(n) {
	const a = (n * (9/5)) + 32;
	const b = parseFloat(a.toFixed(1));
	return b;
}

module.exports = {
  ftoc,
  ctof
}
