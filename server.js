const dotEnv = require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const connectDB = require('./config/connections');
const ProductRouter = require('./routes/productRoutes');
const UserRouter = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddlwware');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');

connectDB();
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

app.use(morgan('tiny'));
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




app.use('/products', ProductRouter);
app.use('/user', UserRouter);

app.get("/", (req, res) => {  
    res.render('Index');
});

const PORT = process.env.PORT;
app.listen(PORT);

//seed data
// const firstProduct = {
//     name: 'blazer',
//     price: '89.00',
//     size: 'M',
//     description: 'OUTER SHELL 70% polyester 30% viscose',
//     grouping: 'top',
//     sex: 'male',
//     img: 'https://static.zara.net/photos///2022/V/0/2/p/7901/409/707/2/w/1126/7901409707_6_1_1.jpg?ts=1646320420817',
//     alt: 'tan mens blazer'
// }

// Product.create(firstProduct)
