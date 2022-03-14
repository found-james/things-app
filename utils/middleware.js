require('dotenv').config();
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const middleware = (app) => {
    app.use(morgan('tiny'));
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

};

module.exports = middleware;