const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.homePage);

router.get('/helloworld', indexController.helloWorld);

module.exports = router;