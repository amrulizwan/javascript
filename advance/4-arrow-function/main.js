// Function Declaration
function tampilNama(nama) {
	return `Halo, ${nama}`;
}

// Function Expression
let sayHello = function (nama) {
	return `Halo, ${nama}`;
};

// Arrow Function
let sayHi = (nama) => {
	return `Halo, ${nama}`;
};

// parameter hanya 1
// let sayHay = nama => {
// 	return `Halo, ${nama}`;
// };

// implisit return (hanya 1 baris)
let sayHai = (nama) => `Halo, ${nama}`;

// 2 atau lebih parameter
let sayHalo = (nama, waktu) => {
	return `Selamat ${waktu}, ${nama}`;
};

// tanpa parameter
let sayHoy = () => `Halo, Izwan`;

// studi kasus
let mahasiswa = ['Amrul', 'Izwan', 'Fauzi', 'Zikrillah'];
let jumlahHuruf = mahasiswa.map(function (nama) {
	return nama.length;
});

// ubah menjadi arrow function
let jumlahHuruf2 = mahasiswa.map((nama) => nama.length);

// return object
let jumlahHuruf3 = mahasiswa.map((nama) => ({
	nama,
	jumlahHuruf: nama.length,
}));

console.log(jumlahHuruf3);
console.table(jumlahHuruf3);
