const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		lowercase: true,
	},
	category: {
		type: String,
		required: true,
		lowercase: true,
	},
	description: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	registryDate: {
		type: Date,
		default: Date.now,
	},
	paymentDate: {
		type: Date,
		default: Date.now,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Entry = mongoose.model('entry', userSchema, 'entry');

module.exports = Entry;
