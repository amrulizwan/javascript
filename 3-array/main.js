// PLAY WITH ARRAY
// how to create array
const makanan = ['Nasi Goreng', 'Ayam Goreng', 'Mie Goreng', 'Sate']; // 0, 1, 2, 3
// how to create array 2
const hobi = [];
hobi[0] = 'Membaca';
hobi[1] = 'Menulis';
hobi[2] = 'Bermain Game';
// ARRAY LENGTH
const panjangArray = makanan.length;
console.log(panjangArray);

// how to create array 3
const buah = new Array('Apel', 'Jeruk', 'Mangga', 'Pisang');

// call array
// alert(makanan[0]); // Nasi Goreng
console.log('CALL ARRAY');
console.log(makanan);
console.log('CALL ARRAY BY INDEX');
console.log(makanan[0]);
// add array
console.log('PUSH');
makanan.push('Bakso');
console.log(makanan);
// remove fisrt array
console.log('SHIFT');
makanan.shift();
console.log(makanan);
// remove last array
console.log('POP');
makanan.pop();
console.log(makanan);
// update array
console.log('UPDATE');
makanan[0] = 'Soto';
console.log(makanan);

// ARRAY SORT
console.log('ARRAY SORT');
const angka = [1, 3, 2, 5, 4];
angka.sort();
console.log(angka);

// THE TUTORIAL
var namaNegara = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei Darussalam', 'Thailand', 'Vietnam', 'Laos', 'Myanmar', 'Filipina', 'Kamboja'];

// ARRAY SEARCH WITH INCLUDES
var hasil = namaNegara.includes('Indonesia'); // true
var hasil2 = namaNegara.includes('Jepang'); // false
console.log(hasil);
console.log(hasil2);

// ARRAY SEARCH WITH INDEXOF
var hasil3 = namaNegara.indexOf('Indonesia'); // 0
console.log(hasil3);

// INDEX BEFORE AND AFTER
const indexBefore = hasil3 - 1;
const indexAfter = hasil3 + 1;
console.log(namaNegara[indexBefore]);
console.log(namaNegara[indexAfter]);

// ARRAY KEY NAME
const game = [];
game['a'] = 'PUBG';
game['b'] = 'Mobile Legends';
game['c'] = 'Free Fire';
console.log(game);
console.log(game['a']);

// ARRAY COPY
console.log('SHALLOW COPY'); // mereferensikan ke array sebelumnya
const game2 = game; // shallow copy
game2['a'] = 'Stumble Guys';
console.log(game);
console.log(game2);

console.log('DEEP COPY'); // tidak mereferensikan ke array sebelumnya
// game2 = game.slice(); // deep copy
// game2 = [...game]; // deep copy
// game2 = Array.from(game); // deep copy
// game2 = JSON.parse(JSON.stringify(game)); // deep copy

//ARRAY MULTI DIMENSI
console.log('ARRAY MULTI DIMENSI');
const matriks = [
	[1, 2, 3],
	[4, 5, 6],
];
console.log(matriks[0][0]); // 1
console.log(matriks[0][1]); // 2
console.log(matriks[0][2]); // 3
console.log(matriks[1][0]); // 4
console.log(matriks[1][1]); // 5
console.log(matriks[1][2]); // 6

const complexArray = [
	'Pisang',
	22,
	['Reading', 'Writing', 'Coding'],
	{
		name: function () {
			console.log('Nama Saya Izwan');
		},
	},
];

console.log(complexArray[0]); // Pisang
console.log(complexArray[1]); // 22
console.log(complexArray[2]); // ['Reading', 'Writing', 'Coding']
console.log(complexArray[2][0]); // Reading
console.log(complexArray[2][1]); // Writing
console.log(complexArray[2][2]); // Coding
console.log(complexArray[3]); // { name: [Function: name] }
console.log(complexArray[3].name); // [Function: name]
complexArray[3].name(); // Nama Saya Izwan

// ARRAY MERGE
console.log('ARRAY MERGE');
const buah1 = ['Apel', 'Jeruk'];
const buah2 = ['Mangga', 'Pisang'];
const buah3 = ['Semangka', 'Melon'];

const buahGabungan = buah1.concat(buah2, buah3);
console.log(buahGabungan);

// CALL INDEX ARRAY
for (list in buahGabungan) {
	console.log(list);
}

// CALL VALUE ARRAY
for (list of buahGabungan) {
	console.log(list);
}

// ARRAY MAP & FILTER
console.log('ARRAY MAP & FILTER');
const anggota = [
	{
		nama: 'Izwan',
		umur: 22,
		hobi: 'Membaca',
	},
	{
		nama: 'Rizky',
		umur: 26,
		hobi: 'Menulis',
	},
	{
		nama: 'Rizwan',
		umur: 24,
		hobi: 'Bermain Game',
	},
];
anggota.map((values, index) => {
	console.log(values);
});

console.log('CALL NAMA & HOBI');
anggota.map((values, index) => {
	console.log(values.nama, values.hobi);
});

console.log('SORT BY UMUR');
anggota
	.sort((a, b) => a.umur - b.umur)
	.map((values, index) => {
		console.log(values);
	});

console.log('FILTER DIATAS 24 TAHUN');
anggota
	.filter((usia) => usia.umur > 24)
	.map((values, index) => {
		console.log(values);
	});
