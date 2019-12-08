const palindromes = function(inputStr) {
	const str = inputStr.replace(/[^0-9a-z]/gi, '').toLowerCase();
	const reversed = str.split('').reverse().join('');
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== reversed[i]) {
			return false;
		}
	}
	return true;
}

module.exports = palindromes
