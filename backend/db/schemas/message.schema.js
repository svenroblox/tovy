const mongoose = require('mongoose');

const message = new mongoose.Schema({
    id: Number,
    author: Number, 
    message: String,
    date: Date,
    ws: Number,
    deleted: Boolean,
    shout: Boolean
})

module.exports = mongoose.models['messages'] || mongoose.model('messages', message, 'messages');