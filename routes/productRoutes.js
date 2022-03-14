const express = require('express');
const { displayAllProducts,
        renderNew,
        deleteProduct,
        updateProduct,
        createProduct,
        editProduct,
        showProduct
} = require('../controllers/productController');

const router = express.Router();

router.use((req, res, next) => {
    req.session.loggedIn ? next() : res.redirect('/');
    
});

router.route('/')
            .get(displayAllProducts)
            .post(createProduct); 

router.get('/new', renderNew);

router.get('/:id/edit', editProduct);

router.route('/:id')
            .delete(deleteProduct)
            .put(updateProduct)
            .get(showProduct);

module.exports = router;