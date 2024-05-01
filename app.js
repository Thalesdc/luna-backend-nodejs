var express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { constants } = require('./core/config');
const routes = require('./src/routes');

dotenv.config();

const app = express();
const port = constants.PORT;

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || 'mongodb://localhost:27017/luna-db-dev'
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
    }
};
connectDB();

app.use(express.json());

app.get('/', function (req, res) {
    console.log(req);
    res.send('ON');
});

app.use('/api/v1/', routes);

const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = server;
