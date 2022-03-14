const dotenv = require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const ProductRouter = require('./routes/productRoutes');
const UserRouter = require('./routes/userRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const router = express.Router();


const { errorHandler } = require('./middleware/errorMiddlwware');

app.use(express.json());
app.use(errorHandler);
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create(
            { mongoUrl: process.env.DATABASE_URL }
        ),
        saveUninitialized: true,
        resave: false
    })
);

