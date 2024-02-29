const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
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

const analyticsUrl = mongoose.model('analytics_url', analyticsSchema);

module.exports = {
    analyticsUrl
}