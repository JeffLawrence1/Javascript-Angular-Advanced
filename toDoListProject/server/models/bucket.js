const mongoose = require('mongoose');

const BucketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title must be min 5 chars'],
        minlength: [5, 'title must be min 5 chars']
    },
    description: {
        type: String,
        required: [true, 'description must be min 10 chars'],
        minlength: [10, 'description must be min 10 chars']
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

mongoose.model('Bucket', BucketSchema);