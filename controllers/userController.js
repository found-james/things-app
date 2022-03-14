const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const renderSignUp = (req, res) => {
    res.render('user/Signup');
};

const createUser = async (req, res) => {
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
};

const renderLogin = (req, res) => {
    res.render('user/Login');
};

const createSession = async (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
        .then ( async user => {
            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if (result) {

                    req.session.username = username;
                    req.session.loggedIn = true;
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

};

const endSession = (req, res) => {
    req.session.destroy( err => {
            res.redirect('/');
        });
}

module.exports = {
    renderSignUp,
    renderLogin,
    createUser,
    createSession,
    endSession
}