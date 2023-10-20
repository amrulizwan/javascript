// CHANGE TITLE
document.title = 'Hello World';

// BODY MODIFICATION
const body = document.body;

// APPEND
body.append('Hello World');

// DOCUMENT CREATE ELEMENT
const h1 = document.createElement('h1');
h1.textContent = 'Hello World'; // SET TEXT CONTENT
const namaKamu = document.createElement('p');
namaKamu.innerText = 'Nama Kamu'; // SET INNER TEXT
const namaSaya = document.createElement('p');
namaSaya.innerHTML = '<b>Nama Saya</b>'; // SET INNER HTML
body.append(h1);
body.append(namaKamu);
body.append(namaSaya);

// GET ELEMENT BY ID
const btn1 = document.getElementById('btn1');

// GET ELEMENT BY querySelector
// const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.tombol');
btn2.textContent = 'Tombol 2';

// STYLING ELEMENT
btn2.style.backgroundColor = 'blue';
btn1.style.backgroundColor = 'red';
btn1.style.border = 'none';
btn1.style.padding = '8px 16px';

// EVENT LISTENER
function panggilAlert() {
	alert('Button 1 di klik');
}
function gantiWarna() {
	btn2.style.backgroundColor = 'red';
}
function gantiWarna2() {
	btn2.style.backgroundColor = 'blue';
}
