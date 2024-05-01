const express = require('express');
const router = express.Router();
const statusRouter = require('./status.router');
const userRouter = require('./user.router');
const entryRouter = require('./entry.router');

// TODO: Tercerizar rotas para os arquivos corretos

router.use('/status', statusRouter);
router.use('/users', userRouter);
router.use('/entries', entryRouter);

module.exports = router;
