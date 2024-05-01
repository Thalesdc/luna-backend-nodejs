const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	try {
		return res.status(200).send({ STATUS: 'OK' });
	} catch (err) {
		console.log(err);
		return res.status(500).send('Try after sometime');
	}
});

module.exports = router;
