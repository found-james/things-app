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

router.route('/index')
            .get(getProducts)
            .post(createProduct);        // Index (READ), Create (CREATE) 

router.route('/new')
            .get(newProduct);          // New route (STATIC route)

router.route('/:id/edit')
            .get(editProduct);

router.route('/:id')
            .delete(deleteProduct)
            .put(updateProduct)
            .get(showProduct);        // Update (UPDATE), Delete (DESTROY)

router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next();
    } 
    else {
        res.redirect('user/login');
    }
});

module.exports = router;

