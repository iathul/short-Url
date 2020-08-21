const mongoose = require('mongoose')
const shortId  = require('shortid')
const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Url',urlSchema)