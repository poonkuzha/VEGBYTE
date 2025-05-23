const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodcontroller');

router.post('/scan', foodController.getFoodWithAlternative);

module.exports = router;