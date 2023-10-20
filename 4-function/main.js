function Name() {
	return 'Amrul Izwan';
}
console.log(Name());

// standard function
function getName(firstName, lastName) {
	console.log(firstName);
}
getName('Amrul', 'Izwan');

// anonymous function
function getFullName() {
	console.log(arguments[0] + ' ' + arguments[1]);
}
getFullName('Salsabila', 'Azzahra');

const getFullName2 = function () {
	console.log(arguments[0] + ' ' + arguments[1]);
};
getFullName2('Salsabila', 'Cantik');

// keyword new Function
const fullName = new Function('firstName', 'lastName', 'console.log(firstName + " " + lastName)');
fullName('Salsabila', 'Imut');

// keyword new Function
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2));

// arrow function
const sum2 = (a, b) => {
	return a + b;
};
console.log(sum2(4, 2));

function randomize() {
	console.log(~~(Math.random() * 1000));
}

randomize();

var namaKaryawan = prompt('Masukkan Nama Karyawan');
var gajiPerHari = prompt('Masukkan Gaji Per Hari');
var jumlahHariMasuk = prompt('Masukkan Jumlah Hari Masuk');

function totalGaji() {
	return gajiPerHari * jumlahHariMasuk;
}

alert('Total Gaji ' + namaKaryawan + ' adalah ' + totalGaji());
