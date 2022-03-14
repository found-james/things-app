const express = require('express');
const Product = require('../models/productSchema');

//Index --gallery
const displayAllProducts = (req, res) => {

    console.log(req.session.username);
    console.log(req.session);

    Product.find({username: req.session.username })
        .then((products) => {                           //how to use async/await here
            res.render('products/Index', { products });
        })
        .catch((error) => {
            res.status(400).json({ error })
    });
};

//New 
const renderNew = (req, res) => {
    res.render('products/New');
};


//Delete
const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then( product => {
            res.redirect('/products');
        })
        .catch( error => {
            res.json({ error });
        });
};

//Update
const updateProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true })
        .then( product => {
            res.redirect('/products');
        })
        .catch( error => {
            res.json({ error });
        });
};
//Create
const createProduct = (req, res) => {
    console.log('we in here');
    console.log(req.body);

    req.body.username = req.session.username;
    //massage data if need be
    Product.create(req.body)
        .then( createdProduct => {
            res.redirect(`/products/${createdProduct._id}`);
        })
        .catch( error => {
            res.json({ error });
        });
};

//Edit
const editProduct = (req, res) => {
    const { id } = req.params;

    Product.findById(id) 
        .then( product => {
            res.render('products/Edit', { product });
        })
        .catch( error => {
            res.json({ error });
        });
};

//Show
const showProduct = (req, res) => {
    const id = req.params.id;

    Product.findById(id)
        .then( product => {
            res.render('products/Show', { product });
        })
        .catch( error => {
            res.json({ error });
        });
};

module.exports = {
    displayAllProducts,
    renderNew,
    deleteProduct,
    editProduct,
    updateProduct,
    createProduct,
    showProduct,
}