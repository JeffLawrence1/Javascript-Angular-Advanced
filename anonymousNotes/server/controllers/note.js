let mongoose = require('mongoose'),
    note = mongoose.model('note');

module.exports = {
    index: function(req, res) {
        let notes = note.find({}, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            return res.json(data);
        });
    },
    show: function(req, res) {
        let notes = note.findOne({ id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            return res.json(data);
        });
    },
    create: function(req, res) {
        let notes = new note(req.body);
        notes.save(function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            return res.json(data);
        });
    },
    destroy: function(req, res) {
        note.remove({ id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            return res.json(data);
        });
    },
}