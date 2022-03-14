const mongoose = require('../config/connections');

const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: String,
    price: String,
    size: String,
    description: String,
    grouping: String,
    sex: String,
    img: String,
    alt: String,
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Product = model('Product', productSchema);
module.exports = Product;