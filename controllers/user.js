const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('user/Signup');
});

router.post('/signup', async (req, res) => {
    req.body.password = 
        await bcrypt.hash(
            req.body.password, 
            await bcrypt.genSalt(10)
        );

    User.create(req.body)
        .then( user => {
            res.redirect('/user/login');
        })
        .catch( error => {
            res.json({ error });
        });
});

router.get('/login', (req, res) => {
    res.render('user/Login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
        .then ( async user => {
            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if (result) {
                    res.redirect('/products');
                } 
                else {
                    res.json({ error: 'password doesnt match' });
                }
            }
            else {
                res.json({ error: 'user doesnt exist' });
            }
        })
        .catch( error => {
            res.json({ error });
        });

});

router.get('/logout', (req, res) => {
    req.session.destroy( err => {
            res.redirect('/');
        });
});

module.exports = router;