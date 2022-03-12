const mongoose = require('../controllers/connections');

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
    username: String
});

const Product = model('Product', productSchema);
module.exports = Product;