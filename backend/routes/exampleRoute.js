const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Example route
router.get('/', exampleController.getExample);

module.exports = router;
