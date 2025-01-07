const express = require('express');

const userController = require('../controllers/users');
const errorController = require('../controllers/errors');

const router = express.Router();

router.get('/', userController.getUser);

router.get('/add-user', userController.getAddUser);

router.post('/add-user', userController.postAddUser);

router.use(errorController.error404);

module.exports = router;
