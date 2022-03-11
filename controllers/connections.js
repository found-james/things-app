require("dotenv").config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(DATABASE_URL, CONFIG);

module.exports = mongoose;