const express = require('express');
const router = express.Router();
const {
    renderSignUp,
    renderLogin,
    createUser,
    createSession,
    endSession
} = require('../controllers/userController');

router.route('/signup')
            .get(renderSignUp)
            .post(createUser);

router.route('/login')
            .get(renderLogin)
            .post(createSession);

router.route('/logout')
            .get(endSession);

module.exports = router;