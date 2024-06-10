// backend/routes/exampleRoute.js

const express = require('express');
const router = express.Router();

// Import the appropriate controller for handling API logic
const exampleController = require('../controllers/exampleController');

// Define routes based on your specific application requirements
router.get('/', exampleController.getIndex);

module.exports = router;
