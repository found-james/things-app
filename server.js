const express = require('express');
const path = require('path');
const middleware = require('./middleware/middleware');
const ProductRouter = require('./routes/productRouter');
const UserRouter = require('./routes/userRouter');

const connectDB = require('./config/connections');

connectDB();

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');


middleware(app);

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
