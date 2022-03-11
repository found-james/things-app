const express = require('express');
const Product = require('../models/products');

const router = express.Router();

//Index --gallery
router.get('/index', (req, res) => {
    Product.find({})
        .then((products) => {                           //how to use async/await here
            res.render('admin/Index', {products });
        })
        .catch((error) => {
            res.status(400).json({ error })
    });
});

//New 
router.get('/new', (req, res) => {
    res.render('admin/New');
});

module.exports = router;