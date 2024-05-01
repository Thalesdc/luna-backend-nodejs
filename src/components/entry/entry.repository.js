const entryModel = require('./entry.model');

const getEntries = async (done) => {
	try {
		await entryModel.find();
		return done(undefined, data);
	} catch (err) {
		return done(err);
	}
};

const getEntryById = async (_id, done) => {
	try {
		await entryModel.findOne(_id);
		return done(undefined, data);
	} catch (err) {
		return done(err);
	}
};

const createEntry = async (newEntry, done) => {
	try {
		const dbNewEntry = await entryModel.create(newEntry);
		return done(undefined, dbNewEntry);
	} catch (err) {
		return done(err);
	}
};

const editEntryById = async (_id, editedEntry, done) => {
	try {
		const searchEntry = await entryModel.findOne(_id);
		if (!searchEntry) return done(`Entry doesn't exist`);
		await entryModel.updateOne(_id, editedEntry);
		return done(undefined, data);
	} catch (err) {
		return done(err);
	}
};

const deleteEntryById = async (_id, done) => {
	try {
		const searchEntry = await entryModel.findOne(_id);
		if (!searchEntry) return done(`Entry doesn't exist`);
		await entryModel.deleteOne(_id);
		return done(undefined, data);
	} catch (err) {
		return done(err);
	}
};

module.exports = {
	getEntries,
	getEntryById,
	createEntry,
	editEntryById,
	deleteEntryById,
};
