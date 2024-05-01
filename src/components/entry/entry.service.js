const entryRepository = require('./entry.repository');

const getEntries = (done) => {
	entryRepository.getEntries(done);
};

const getEntryById = (_id, done) => {
	entryRepository.getEntryById(_id, done);
};

const createEntry = (newEntry, done) => {
	entryRepository.createEntry(newEntry, done);
};

const editEntryById = (_id, done) => {
	entryRepository.editEntryById(_id, done);
};

const deleteEntryById = (_id, done) => {
	entryRepository.deleteEntryById(_id, done);
};

module.exports = {
	getEntries,
	getEntryById,
	createEntry,
	editEntryById,
	deleteEntryById,
};
