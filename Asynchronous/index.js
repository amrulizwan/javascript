// CALLBACK

var token = ~~[Math.random() * 12345678];
var pictures = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];

function login(username, callback) {
	console.log('Processing token now...');
	setTimeout(() => {
		callback({ token, username });
	}, 1000);
}

function getUser(token, callback) {
	console.log('Processing api key now...');
	if (token) {
		setTimeout(() => {
			callback({ apiKey: 'xApiKey123Yzv' });
		}, 2000);
	}
}

function getPictures(apiKey, callback) {
	console.log('Processing pictures now...');
	if (apiKey) {
		setTimeout(() => {
			callback({ pictures });
		}, 3000);
	}
}

login('Amrul Izwan', function (response) {
	const { token } = response;
	const { username } = response;
	console.log('token=> ' + token + '\n' + 'username=> ' + username + ' succesfully..');
	getUser(token, function (response) {
		const { apiKey } = response;
		console.log('apiKey=> ' + apiKey + ' succesfully..');
		getPictures(apiKey, function (response) {
			const { pictures } = response;
			console.log('pictures=> ' + pictures + ' succesfully..');
		});
	});
});
