module.exports = {
	url: function() { 
		return 'http://localhost:4200/sign/login'; 
	},
	elements: {
		userName: {
			selector: 'input[name=userName]'
		},
		password: {
			selector: '#password'
		},
		submit: {
			selector: '.btn'
		}
	}
};