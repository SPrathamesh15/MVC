const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();
const contactController = require('../controllers/contact');
//creating a middleware
router.get('/contact', contactController.getContact)
module.exports = router;