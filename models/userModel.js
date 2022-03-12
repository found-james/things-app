const mongoose = require('mongoose');

const user2Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User2 = mongoose.model('User', user2Schema);

module.exports = User2;

