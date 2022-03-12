const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const asyncHandler = require('express-async-handler');
// GET products in db
// GET /api/proudcts
const getProducts = asyncHandler( async (req, res) => {
    
    Product.find({ username: req.session.username })
        .then((products) => {                           //how to use async/await here
            res.render('user/Index', { products });
        })
        .catch((error) => {
            res.status(400).json({ error })
    });
});


const newProduct = (req, res) => {
    res.render('products/New');
}

// DELETE product
// DELETE /api/products/:id

const deleteProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    if(!product) {
        res.status(400)
        throw new Error('Product not found')
    } 
    
    await product.remove();
    
    res.status(200).json({ id: req.params.id });

});
// PUT updated product
// PUT api/product/goals/:id

const updateProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    const updatedGoal = 
        await Product.findByIdAndUpdate(
                            req.params.id,
                            req.body, 
                            { new: true }
                            );

    res.status(200).json(updatedGoal);

});

const createProduct = asyncHandler( async (req, res) => {
    //massage data if need be
    if(!req.body.text){
        res.status(400)
        throw new Error('write stuff yo');
    }

    const product = await Product.create(req.body)

    Product.create(req.body)
        .then( products => {
            res.redirect('/products');
        })
        .catch( error => {
            res.json({ error });
        });
});

const editProduct = asyncHandler( async (req, res) => {
    const { id } = req.params;

    Product.findById(id) 
        .then( product => {
            res.render('products/Edit', { product });
        })
        .catch( error => {
            res.json({ error });
        });
});

const showProduct = asyncHandler( async (req, res) => {
    const id = req.params.id;

    Product.findById(id)
        .then( product => {
            res.render('/products/Show', { product });
        })
        .catch( error => {
            res.json({ error });
        });
});

module.exports = 
{
    getProducts, 
    newProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    editProduct,
    showProduct,
    router
}

// delete product using .then()

// const { id } = req.params;
    // Product.findByIdAndDelete(id)
    //     .then( product => {
    //         res.redirect('/products');
    //     })
    //     .catch( error => {
    //         res.json({ error });
    //     });

// update product using .then ()
    // const { id } = req.params;
    // Product.findByIdAndUpdate(id, req.body, { new: true })
    //     .then( product => {
    //         res.redirect('/products');
    //     })
    //     .catch( error => {
    //         res.json({ error });
    //     });