const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const isAdmin = require('../middleware/isAdmin');


router.get('/', indexController.homePage);
router.get('/helloworld', indexController.helloWorld);
router.get('/users', isAdmin, indexController.listUsers);
router.post('/users/:id/delete', isAdmin, indexController.deleteUser);
router.post('/users/:id/upgrade', isAdmin, indexController.upgradeUser);


module.exports = router;