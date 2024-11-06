const express = require('express');
const router = express.Router();
const userAccommodationHistoryController = require('../controllers/userAccommodationHistoryController');

router.post('/', userAccommodationHistoryController.createHistory);
router.get('/:userId', userAccommodationHistoryController.getHistoryByUserId);

module.exports = router;
