const express = require('express');
const app = express();
const router = express.Router();


//CONTROLLERS
const signupController = require('../controllers/signupController');

router.get('/auth/signup', signupController().renderSignup);
router.post('/auth/signup', signupController().createUser);


module.exports = router
