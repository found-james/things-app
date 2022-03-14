const mongoose = require('../config/connections');

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

// import mongoose module from location where it was defined
// unpack objects {Schema and model} from mongoose ODM 
// define userSchema
// use model object to define structure of documents