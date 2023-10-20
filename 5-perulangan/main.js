// PERULANGAN
// FOR LOOP
const makanan = ['Nasi Goreng', 'Ayam Goreng', 'Mie Goreng', 'Sate'];

console.log('FOR LOOP');
for (let i = 0; i < 5; i++) {
	console.log(i);
}

//with array length
console.log('FOR LOOP WITH ARRAY');
for (let i = 0; i < makanan.length; i++) {
	console.log(makanan[i]);
}

// WHILE LOOP
console.log('WHILE LOOP');
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

// DO WHILE LOOP
console.log('DO WHILE LOOP');
let j = 0;
do {
	console.log(j);
	j++;
} while (j < 5);
