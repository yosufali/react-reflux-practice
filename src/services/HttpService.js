var Fetch = require('whatwg-fetch');
var baseUrl = "http://localhost:6069";

var service = {
	get: function(url) {
		return fetch(baseUrl + url)
		// Called when fetch succesfully returns
		.then(function(response) {
			return response.json();
		});
	},

	post: function(url, body) {
		return fetch(baseUrl + url, {
			method: 'POST',
			header: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(function(response) {
			console.log(response);
			return response;
		});
	}
};

module.exports = service;
