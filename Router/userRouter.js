const express = require('express')
const router = express.Router()
const UserController = require('../Controller/UserController')

router.post('/send', UserController.Registeruser)

module.exports = router