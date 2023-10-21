// Cara membuat Object pada Javascript

// 1. Object Literal
// Tidak efektif untuk object yang banyak
let mahasiswa = {
	nama: 'Amrul Izwan',
	umur: 20,
	hobi: ['Membaca', 'Menulis', 'Menggambar'],
	iq: 120,
	belajar: function (membaca) {
		this.iq = this.iq + membaca;
		console.log(`Halo ${this.nama},Kamu sudah membaca ${membaca} kali, IQ kamu sekarang ${this.iq}    }`);
	},
	mainGame: function (game) {
		this.iq = this.iq - game;
		console.log(`Halo ${this.nama},Kamu sudah bermain game ${game} kali, IQ kamu sekarang ${this.iq}    }`);
	},
};

let mahasiswa2 = {
	nama: 'Adam Zikrillah',
	umur: 20,
	hobi: ['Mabok', 'Game', 'Berantem'],
	iq: 190,
	belajar: function (membaca) {
		this.iq = this.iq + membaca;
		console.log(`Halo ${this.nama},Kamu sudah membaca ${membaca} kali, IQ kamu sekarang ${this.iq}    }`);
	},
	mabok: function (mabok) {
		var mabuk = mabok * 6;
		this.iq = this.iq - mabuk;
		console.log(`Halo ${this.nama},Kamu sudah mabuk ${mabok} kali, IQ kamu sekarang ${this.iq}    }`);
	},
};

console.log(mahasiswa);
// 2. Function Declaration
const methodMahasiswa = {
	belajar: function (belajar) {
		this.iq += belajar;
		console.log(`Halo ${this.nama},Kamu sudah membaca ${belajar} kali, IQ kamu sekarang ${this.iq}    }`);
	},
	mabok: function (mabok) {
		var mabuk = mabok * 6;
		this.iq -= mabuk;
		console.log(`Halo ${this.nama},Kamu sudah mabuk ${mabok} kali, IQ kamu sekarang ${this.iq}    }`);
	},
	tidur: function (tidur) {
		console.log(`Halo ${this.nama},Sekarang kamu sudah tidur ${tidur} jam`);
	},
};
function Mahasiswa(nama, umur, hobi, iq) {
	let mahasiswa3 = {};
	mahasiswa3.nama = nama;
	mahasiswa3.umur = umur;
	mahasiswa3.hobi = hobi;
	mahasiswa3.iq = iq;
	mahasiswa3.belajar = methodMahasiswa.belajar;
	mahasiswa3.mabok = methodMahasiswa.mabok;
	// method tidur tidak di masukkan ke dalam object mahasiswa3

	return mahasiswa3;
}

let izwan = Mahasiswa('Amrul Izwan', 20, ['Membaca', 'Menulis', 'Menggambar'], 120);
// let adam = Mahasiswa('Adam Zikrillah', 20, ['Mabok', 'Game', 'Berantem'], 190);

// 3. Constructor Function (keyword new)
function Mahasiswa2(nama, umur, hobi, iq) {
	this.nama = nama;
	this.umur = umur;
	this.hobi = hobi;
	this.iq = iq;
	this.belajar = function (belajar) {
		this.iq += belajar;
		console.log(`Halo ${this.nama},Kamu sudah membaca ${belajar} kali, IQ kamu sekarang ${this.iq}    }`);
	};
	this.mabok = function (mabok) {
		var mabuk = mabok * 6;
		this.iq -= mabuk;
		console.log(`Halo ${this.nama},Kamu sudah mabuk ${mabok} kali, IQ kamu sekarang ${this.iq}    }`);
	};
}

let adam = new Mahasiswa('Adam Zikrillah', 20, ['Mabok', 'Game', 'Berantem'], 190);

// 4. Object.create()
function Mahasiswa3(nama, umur, hobi, iq) {
	let mahasiswa4 = Object.create(methodMahasiswa);
	mahasiswa4.nama = nama;
	mahasiswa4.umur = umur;
	mahasiswa4.hobi = hobi;
	mahasiswa4.iq = iq;
	// semua method di methodMahasiswa masuk ke dalam object mahasiswa4 (belajar, mabok, tidur)

	return mahasiswa4;
}

let farel = Mahasiswa3('Farel', 20, ['Mabok', 'Game', 'Berantem'], 90);
