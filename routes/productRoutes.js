const express = require('express');

const { getProducts, 
        newProduct, 
        deleteProduct,
        updateProduct,
        createProduct, 
        editProduct, 
        showProduct,
        router
    } = require('../controllers/productController');

const { protect } = require('../middleware/authMiddleware');

router.route('/index')
            .get(protect, getProducts)
            .post(protect, createProduct);        // Index (READ), Create (CREATE) 

router.route('/new')
            .get(newProduct);          // New route (STATIC route)

router.route('/:id/edit')
            .get(protect, editProduct);

router.route('/:id')
            .delete(protect, deleteProduct)
            .put(protect, updateProduct)
            .get(protect, showProduct);        // Update (UPDATE), Delete (DESTROY)

router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } 
    else {
        res.redirect('user/login');
    }
});

module.exports = router;

