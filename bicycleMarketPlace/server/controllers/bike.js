var mongoose = require('mongoose')
var Bike = mongoose.model('bike')
var User = mongoose.model('user')

module.exports = {
    index: function(req, res) {
        var bikes = Bike.find({}, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    usersBikes: function(req, res) {
        var bikes = Bike.find({ user: req.user._id }, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    show: function(req, res) {
        Bike.findOne({ _id: req.params.id }, function(err, bike) {
            User.findOne({ _id: bike.user }, function(err, user) {
                if (err) {
                    res.json(err);
                    return;
                }
                res.json({ bike: bike, user: { email: user.email, first_name: user.first_name, last_name: user.last_name } });
            })
        });
    },
    create: function(req, res) {
        var bike = new Bike(req.body);
        bike.user = req.user._id;
        bike.save(function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    destroy: function(req, res) {
        Bike.remove({ _id: req.params.id }, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    update: function(req, res) {
        Bike.update({ _id: req.params.id }, req.body, function(err, data) {
            if (err) {
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
}