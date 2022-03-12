require("dotenv").config();
const mongoose = require('mongoose');

const DATABASE_URI = process.env.DATABASE_URI;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DATABASE_URI, CONFIG);
    }
    catch (error) {
        process.exit(1)
    }
}

module.exports = connectDB;