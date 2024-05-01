const entryService = require('./entry.service');

const getEntries = (done) => {
	entryService.getEntries(done);
};

const getEntryById = (_id, done) => {
	entryService.getEntryById(_id, done);
};

const createEntry = (newEntry, done) => {
	entryService.createEntry(newEntry, done);
};

const editEntryById = (_id, done) => {
	entryService.editEntryById(_id, done);
};

const deleteEntryById = (_id, done) => {
	entryService.deleteEntryById(_id, done);
};

module.exports = {
	getEntries,
	getEntryById,
	createEntry,
	editEntryById,
	deleteEntryById,
};
