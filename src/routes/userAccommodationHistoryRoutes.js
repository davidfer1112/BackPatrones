const express = require('express');
const router = express.Router();
const userAccommodationHistoryController = require('../controllers/userAccommodationHistoryController.js');
console.log(userAccommodationHistoryController);

router.post('/', userAccommodationHistoryController.createHistory);
router.get('/:userId', userAccommodationHistoryController.getHistoryByUserId);
router.put('/:historyId', userAccommodationHistoryController.updateHistory); 

module.exports = router;
