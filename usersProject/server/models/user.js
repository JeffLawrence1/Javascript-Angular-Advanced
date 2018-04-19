const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    }
}, { timestamps: true })

mongoose.model('User', UserSchema);