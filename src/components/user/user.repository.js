// (DAO) Data Acess Layer
const userModel = require('./user.model');

const getUserByEmail = async (email, done) => {
	try {
		const user = await userModel.findOne({ email });
		return done(undefined, user);
	} catch (err) {
		return done(err);
	}
};

module.exports = {
	getUserByEmail,
};
