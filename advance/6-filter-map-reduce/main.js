// FILTER

const number = [-2, 1, -6, 9, -3, 4, 5, 7, 6, 8];
console.log('ORIGINAL');
console.log(number);

let newNumber = number.filter((n) => n > 3);

console.log('FILTER ANGKA > 3');
console.log(newNumber);

// MAP

const numberMap = number.map((n) => n * 2);
console.log('MAP ANGKA * 2');
console.log(numberMap);

// REDUCE
const numberReduce = number.reduce((accumulator, currenValue) => accumulator + currenValue);
console.log('REDUCE ANGKA TOTAL');
console.log(numberReduce);

// METHOD CHAINING
const numberChain = number
	.filter((n) => n > 2) // ANGKA > 2
	.map((n) => n + 2) // SETIAP ANGKA + 2
	.reduce((acc, cur) => acc + cur); // TOTAL

console.log('METHOD CHAINING');
console.log(numberChain);
