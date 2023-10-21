// Mengambil semua elemen peserta
const peserta = Array.from(document.querySelectorAll('[data-finish]'));
console.log(peserta);

// Mengambil semua durasi peserta dengan gender pria
const pria = peserta
	.filter((n) => n.textContent.includes('Pria'))
	// mengambil semua data finish pria
	.map((n) => n.dataset.finish);
console.log(pria);
// Mengambil Jumlah peserta pria
const jumlahPria = pria.length;

// Mengambil semua durasi peserta dengan gender wanita
const wanita = peserta
	.filter((n) => n.textContent.includes('Wanita'))
	// mengambil semua data finish wanita
	.map((n) => n.dataset.finish);
console.log(wanita);
// Mengambil Jumlah peserta wanita
const jumlahWanita = wanita.length;

// Rata-rata durasi peserta pria
let priaAvg =
	pria
		.map((avg) => {
			let parts = avg.split(':').map((part) => parseFloat(part));
			return (parts = parts[0] * 60 + parts[1]);
		})

		.reduce((acc, cur) => acc + cur) / jumlahPria;

const menitPria = Math.floor(priaAvg / 60);
const detikPria = Math.floor(priaAvg - menitPria * 60)
	.toString()
	.padStart(2, '0');
priaAvg = `${menitPria}:${detikPria}`;
console.log(priaAvg);

// Rata-rata durasi peserta wanita
let wanitaAvg =
	wanita
		.map((avg) => {
			let parts = avg.split(':').map((part) => parseFloat(part));
			return (parts = parts[0] * 60 + parts[1]);
		})

		.reduce((acc, cur) => acc + cur) / jumlahWanita;
const menitWanita = Math.floor(wanitaAvg / 60);
const detikWanita = Math.floor(wanitaAvg - menitWanita * 60)
	.toString()
	.padStart(2, '0');
wanitaAvg = `${menitWanita}:${detikWanita}`;
console.log(wanitaAvg);

// Menampilkan jumlah peserta pria dan wanita
const textJmlPria = document.querySelector('#pria');
const textJmlWanita = document.querySelector('#wanita');

textJmlPria.textContent = `Jumlah Peserta Pria : ${jumlahPria} orang.`;

textJmlWanita.textContent = `Jumlah Peserta Wanita : ${jumlahWanita} orang.`;

// Menampilkan rata-rata durasi peserta pria dan wanita
const textAvgPria = document.querySelector('#priaAvg');
const textAvgWanita = document.querySelector('#wanitaAvg');

textAvgPria.textContent = `Rata-rata durasi pria : ${menitPria} menit ${detikPria} detik.`;
textAvgWanita.textContent = `Rata-rata durasi pria : ${menitWanita} menit ${detikWanita} detik.`;
