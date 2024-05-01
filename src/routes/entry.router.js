const express = require('express');
const router = express.Router();
const entryController = require('../components/entry/entry.controller');

// TODO: Global|File : Implementar regras de negócio

// TODO: Implementar filtros
// Get all entries
router.get('/', (req, res) => {
    try {
        const teste = true;
        console.log('🚀 ~ router.get ~ teste:', teste);

        entryController.getEntries((err, results) => {
            if (err)
                return res.status(400).send({ status: 'ERROR', error: err });
            return res.status(200).send({ status: 'SUCCESS', data: results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Try after sometime');
    }
});

// Get entry by id
router.get('/:_id', (req, res) => {
    try {
        const { _id } = req.params;
        entryController.getEntryById(_id, (err, results) => {
            if (err)
                return res.status(400).send({ status: 'ERROR', error: err });
            return res.status(200).send({ status: 'SUCCESS', data: results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Try after sometime');
    }
});

// Create Entries
router.post('/', (req, res) => {
    try {
        entryController.createEntry(req.body, (err, results) => {
            if (err)
                return res.status(400).send({ status: 'ERROR', error: err });
            return res.status(201).send({ status: 'SUCCESS', data: results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Try after sometime');
    }
});

// Edit Entry by Id
router.patch('/:_id', (req, res) => {
    try {
        const { _id } = req.params;
        entryController.editEntryById(_id, req.body, (err, results) => {
            if (err)
                return res.status(400).send({ status: 'ERROR', error: err });
            return res.status(200).send({ status: 'SUCCESS', data: results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Try after sometime');
    }
});

// Delete Entry by Id
router.delete('/:_id', (req, res) => {
    try {
        const { _id } = req.params;
        entryController.deleteEntryById(_id, req.body, (err, results) => {
            if (err)
                return res.status(400).send({ status: 'ERROR', error: err });
            return res.status(200).send({ status: 'SUCCESS', data: results });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send('Try after sometime');
    }
});

// TODO: Ideia de funcionalidade: 'lixeira' de entradas para caso de deleção

module.exports = router;
