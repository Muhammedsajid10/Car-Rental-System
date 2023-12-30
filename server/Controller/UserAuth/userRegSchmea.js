const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    password: { type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'admin' },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
