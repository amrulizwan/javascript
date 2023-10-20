// PROMISES

var token = ~~[Math.random() * 12345678];
var pictures = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];

function login(username, password) {
	console.log('Processing token now...');
	return new Promise((success, failed) => {
		setTimeout(() => {
			if (username !== 'amrulizwan' && password !== '12345') failed('Wrong username or password!');
			success({ token, username, password });
		}, 1000);
	});
}

function getUser(token) {
	console.log('Processing api key now...');
	return new Promise((success, failed) => {
		setTimeout(() => {
			if (!token) failed('Sorry no token returned from server, Cannot process api key.');
			success({ apiKey: 'xApiKey123Yzv' });
		}, 3000);
	});
}

function getPictures(apiKey) {
	console.log('Processing pictures now...');
	return new Promise((success, failed) => {
		setTimeout(() => {
			if (!apiKey) failed('Sorry no api key returned from server, Cannot process pictures.');
			success({ pic: pictures });
		}, 3000);
	});
}

const userInput = prompt('Enter username');
const passInput = prompt('Enter password');

// Standard Promise
// const user = login(userInput, passInput);
// user.then(function (response) {
// 	const { token } = response;
// 	const { username } = response;
// 	const { password } = response;
// 	getUser(token)
// 		.then(function (response) {
// 			const { apiKey } = response;
// 			getPictures(apiKey)
// 				.then(function (response) {
// 					const { pic } = response;
// 					console.log('token=> ' + token + '\n' + 'username=> ' + username + '\n' + 'password=> ' + password + '\n' + 'apiKey=> ' + apiKey + '\n' + 'pictures=> ' + pic + '\nsuccesfully..');
// 				})
// 				.catch((err) => console.log(err));
// 		})
// 		.catch((err) => console.log(err));
// });

// Async Await Promise

async function userDisplay() {
	const response = await login(userInput, passInput);
	const { token } = response;
	const { username } = response;
	const { password } = response;
	const { apiKey } = await getUser(token);
	const { pic } = await getPictures(apiKey);
	console.log('token=> ' + token + '\n' + 'username=> ' + username + '\n' + 'password=> ' + password + '\n' + 'apiKey=> ' + apiKey + '\n' + 'pictures=> ' + pic + '\nsuccesfully..');
}

userDisplay().catch((err) => console.log(err));
