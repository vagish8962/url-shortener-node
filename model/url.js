const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: {
        required: true,
        type: String,
    },
    shortUrl: {
        required: true,
        type: String,
        unique: true
    }
});

const URL = mongoose.model('url', urlSchema);

module.exports = {
    URL
}