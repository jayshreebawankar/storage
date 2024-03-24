const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController.js')

route.post('/create', userController);

module.exports = route;
