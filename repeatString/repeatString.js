const repeatString = function(str, mult) {
	if (mult < 0) return "ERROR";
	let result = "";
	for (let i = 0; i < mult; i++) {
		result += str;
	}
	return result;
}

module.exports = repeatString
