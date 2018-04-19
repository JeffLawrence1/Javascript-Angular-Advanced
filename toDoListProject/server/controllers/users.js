const mongoose = require('mongoose'),
    User = mongoose.model('User');

class UsersController {
    create(req, res) {
        User.findOne({ name: req.body.name }, (err, user) => {
            if (err) {
                return res.json(err)
            } else if (!user) {
                User.create(req.body, (err, user) => {
                    if (err) {
                        return res.json(err);
                    }
                    // req.session.user_name = newUser.name;
                    req.session.user = user;
                    return res.json(user)
                })
            } else {
                // req.session.user_name = user.name;
                req.session.user = user;
                return res.json(user);
            }
        })
    }
    index(req, res) {
        var users = User.find({}, function(err, user) {
            if (err) {
                res.json(err);
                return;
            }

            return res.json(user);
        });
    }
    logout(req, res) {
        // delete req.session.user_name;
        delete req.session.user_id;
        return res.json({ status: true });
    }
    session(req, res) {
        if (!req.session.user_id) {
            return res.json({ status: false });
        }
        User.findById(req.session.user_id, (err, user) => {
            if (err) {
                return res.json(err);
            }
            return res.json(user);
        })
    }
}

module.exports = new UsersController();