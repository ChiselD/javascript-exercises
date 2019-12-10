const caesar = function(str, shift) {
	let result = "";
	let asciiCode = 0;
	let lowercase = /[a-z]/;
	let uppercase = /[A-Z]/;
	for (let i = 0; i < str.length; i++) {

		if (lowercase.test(str[i])) {
			// char is lowercase
			asciiCode = str[i].charCodeAt(0);
			asciiCode += shift;
			while (asciiCode > 122) {asciiCode -= 26;}
			while (asciiCode < 97) {asciiCode += 26;}
			let shiftedLetter = String.fromCharCode(asciiCode);
			result += shiftedLetter;

		} else if (uppercase.test(str[i])) {
			// char is uppercase
			asciiCode = str[i].charCodeAt(0);
			asciiCode += shift;
			while (asciiCode > 90) {asciiCode -= 26;}
			while (asciiCode < 65) {asciiCode += 26;}
			let shiftedLetter = String.fromCharCode(asciiCode);
			result += shiftedLetter;

		} else {
			// char is not a letter
			result += str[i];
		}
	}
	console.log(result);
	return result;
}

module.exports = caesar
