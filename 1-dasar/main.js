// VARIABLES & DATA TYPES

var nama = 'Izwan'; // String
const usia = 20; // Number
let status = false; // Boolean
let tinggiBadan = 165.5; // Float / Double
let alamat; // Undefined
let hobi = ['makan', 'tidur', 'main game']; // Array
let mobil = {
	nama: 'Avanza',
	warna: 'Putih',
	tahun: 2019,
}; // Object
// let pacar = null; // Null

// CONDITIONAL STATEMENT
let pacar = 1;

// if (pacar == null) {
// 	pacar = 'Tidak ada pacar';
// } else {
// 	pacar = 'Punya pacar';
// }

switch (pacar) {
	case 1:
		pacar = 'Punya pacar 1';
		break;
	case 2:
		pacar = 'Punya pacar 2';
		break;
	default:
		pacar = 'Tidak ada pacar';
		break;
}

// alert(`Nama saya ${nama}, usia ${usia} tahun, ${pacar}`);

// OPERATOR ARITMATIKA
let gaji = 2500000;
let bonus = 500000;
let pengeluaran = 700000;

const saldoBaru = gaji + bonus; // penjumlahan
const saldoAkhir = saldoBaru - pengeluaran; // pengurangan
const tanggungan = saldoAkhir / 2; // pembagian
const sisaSaldo = saldoAkhir % 2; // modulus
const sisaSaldo2 = saldoAkhir * 2; // perkalian

// alert(`Gaji saya ${gaji}, bonus ${bonus}, pengeluaran ${pengeluaran}, saldo baru ${saldoBaru}, saldo akhir ${saldoAkhir}, tanggungan ${tanggungan}`);

// OPERATOR PERBANDINGAN
const nilai1 = 10;
const nilai2 = 5;
// alert(nilai1 == nilai2); // false (apakah nilai1 sama dengan nilai2)
// alert(nilai1 != nilai2); // true (apakah nilai1 tidak sama dengan nilai2)
// alert(nilai1 > nilai2); // true (apakah nilai1 lebih besar dari nilai2)
// alert(nilai1 < nilai2); // false (apakah nilai1 lebih kecil dari nilai2)
// alert(nilai1 >= nilai2); // true (apakah nilai1 lebih besar sama dengan nilai2)
// alert(nilai1 <= nilai2); // false (apakah nilai1 lebih kecil sama dengan nilai2)

// PLAY WITH ARRAY
const makanan = ['Nasi Goreng', 'Ayam Goreng', 'Mie Goreng', 'Sate'];

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
