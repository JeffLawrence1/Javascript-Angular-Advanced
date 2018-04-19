const mongoose = require('mongoose'),
    Bucket = mongoose.model('Bucket'),
    User = mongoose.model('User');

class BucketsController {

    index(req, res) {
            Bucket.find({}).populate({ path: 'user', model: 'User' }).exec((err, buckets) => {
                if (err) {
                    return res.json(err);
                }
                // console.log(buckets);
                return res.json(buckets);
            })
        }
        // index(req, res) {
        //     var buckets = Bucket.find({}, function(err, bucket) {
        //         if (err) {
        //             res.json(err);
        //             return;
        //         }
        //         res.json(bucket);
        //     });
        // }

    // show(req, res) {
    //     Bucket.findById(req.params.id).populate({ path: 'options', model: 'Option' }).exec((err, poll) => {
    //         if (err) {
    //             return res.json(err);
    //         }
    //         return res.json(poll);
    //     })
    // }

    destroy(req, res) {
        Bucket.findById(req.params.id, (err, poll) => {
            if (err) {
                return res.json(err);
            }
            if (!bucket) {
                return res.json({ status: 'item not found' });
            }
            if (bucket.user == req.session.user_id) {
                bucket.remove();
                return res.json({ status: true })
            } else {
                return res.json({ status: 'user not authorized' })
            }
        })
    }
    create(req, res) {
        Bucket.create({ title: req.body.title, description: req.body.description, user: req.session.user._id, name: req.session.user.name }, (err, bucket) => {
            if (err) {
                return res.json(err);
            }
            console.log(req.session.user_id);
            return res.json(bucket);
        })
    }
}
module.exports = new BucketsController();