const mongoose = require('mongoose');
const User = require('../models/user');

const signupController = () => {
    return {
        renderSignup(req, res) {
            return res.render('auth/signup')
        },
        createUser(req, res) {
            const { name, gender, email, password, mailList } = req.body;

            if (!name || !gender || !email || !password || !mailList) {
                res.json({empty: "empty fields"})
            }

        }
    }
}

module.exports = signupController;