const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')

router.get('/api/test', userController.test)
router.post('/api/signup', userController.postNewUser)

module.exports = router
