const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/helloworld', apiController.helloWorld);

module.exports = router;