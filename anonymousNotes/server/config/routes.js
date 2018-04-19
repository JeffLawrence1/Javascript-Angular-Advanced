const mongoose = require('mongoose');
let noteController = require('../controllers/note.js');

module.exports = function(app) {

    app.get('/notes', function(req, res) {
        noteController.index(req, res)
    });

    app.post('/notes', function(req, res) {
        noteController.create(req, res)
    });

    app.get('/notes/:id', function(req, res) {
        noteController.show(req, res)
    });

    app.delete('/notes/:id', function(req, res) {
        noteController.destroy(req, res)
    });

    app.put('/notes/:id', function(req, res) {
        noteController.update(req, res)
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./../public/dist/index.html"))
    });
}