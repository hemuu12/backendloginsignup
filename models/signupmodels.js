const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('user',signupSchema)