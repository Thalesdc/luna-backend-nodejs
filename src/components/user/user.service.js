// Service Layer
const userRepository = require('./user.repository');

const getUserByEmail = (email, done) => {
	userRepository.getUserByEmail(email, done);
};

module.exports = {
	getUserByEmail,
};
