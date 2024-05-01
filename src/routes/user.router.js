const express = require('express');
const router = express.Router();
const userController = require('../components/user/user.controller');

router.get('/:email', (req, res) => {
	try {
		const { email } = req.params;
		userController.getUserByEmail(email, (err, results) => {
			if (err)
				return res.status(400).send({ status: 'ERROR', error: err });
			return res.status(200).send({ status: 'SUCCESS', data: results });
		});
	} catch (err) {
		console.log(err);
		return res.status(500).send('Try after sometime');
	}
});

module.exports = router;
