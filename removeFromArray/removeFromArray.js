const removeFromArray = function(...args) {
	let arr = args[0];
	let toRemove = [];
	// create array of elements to be removed from original array
	for (let i = 1; i < args.length; i++) {
		toRemove.push(args[i]);
	}
	// search for and (if applicable) remove each element in turn
	for (let i = 0; i < toRemove.length; i++) {
		if (arr.includes(toRemove[i])) {
			arr.splice(arr.indexOf(toRemove[i]), 1);
		}
	}
	return arr;
}

module.exports = removeFromArray
