const mongoose = require('../controllers/connections');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]

});

const User = model('User', userSchema);

module.exports = User;
