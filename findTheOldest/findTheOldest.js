let findTheOldest = function(arr) {
	let oldestAge = 0;
    let oldestPerson = arr[0];
    for (let i = 0; i < arr.length; i++) {
      let person = arr[i];
      let age;
      if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
      } else {
        age = new Date().getFullYear() - person.yearOfBirth;
      }
      if (age > oldestAge) {
        oldestAge = age;
        oldestPerson = person;
      }
    }
    return oldestPerson;
}

module.exports = findTheOldest
