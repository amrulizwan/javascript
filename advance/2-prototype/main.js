function Mahasiswa(nama, umur, hobi, iq) {
	this.nama = nama;
	this.umur = umur;
	this.hobi = hobi;
	this.iq = iq;
}

Mahasiswa.prototype.belajar = function (belajar) {
	this.iq += belajar;
	console.log(`Halo ${this.nama},Kamu sudah membaca ${belajar} kali, IQ kamu sekarang ${this.iq}    }`);
};

Mahasiswa.prototype.mabok = function (mabok) {
	var mabuk = mabok * 6;
	this.iq -= mabuk;
	console.log(`Halo ${this.nama},Kamu sudah mabuk ${mabok} kali, IQ kamu sekarang ${this.iq}    }`);
};

let izwan = new Mahasiswa('Amrul Izwan', 20, ['Membaca', 'Menulis'], 120);
