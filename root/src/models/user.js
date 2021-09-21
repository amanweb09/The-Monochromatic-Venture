const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    mailList : {
        type : Boolean,
        required : true
    }
})

const User = new mongoose.model(userSchema, 'user');

module.exports = User;