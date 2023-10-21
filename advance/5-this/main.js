// konsep this pada arrow function

// Constructor Function
const Mahasiswa = function () {
	this.nama = 'Izwan';
	this.umur = 20;
	this.sayHello = () => {
		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
	};
};

const izwan = new Mahasiswa();

// Object Literal
const mhs1 = {
	nama: 'Izwan',
	umur: 20,
	sayHello: () => {
		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`); // this mengembalikan object global (undefined)
	},
};

let Mahasiswa2 = function () {
	this.nama = 'Izwan';
	this.umur = 20;
	this.sayHello = function () {
		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
	};

	setInterval(() => {
		console.log(this.umur++);
	}, 500);
};

// const izwan2 = new Mahasiswa2();
