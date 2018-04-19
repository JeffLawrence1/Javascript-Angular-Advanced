const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    content: { type: String },
}, { timestamps: true });

const note = mongoose.model('note', noteSchema);