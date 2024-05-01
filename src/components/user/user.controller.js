// Presentation Layer
const userService = require('./user.service');

const getUserByEmail = (email, done) => {
	userService.getUserByEmail(email, done);
};

module.exports = {
	getUserByEmail,
};
