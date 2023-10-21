// Lexical Scope
function init() {
	let nama = 'Amrul Izwan'; // Local Variable
	function tampilNama() {
		// Inner Function (Closure)
		console.log(nama);
	}
	tampilNama();
}

init();

let add = (function () {
	let counter = 0;
	return function () {
		return ++counter;
	};
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
