const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
    res.render('guest/index')
})

router.get('/auth/signup',  )

module.exports = router