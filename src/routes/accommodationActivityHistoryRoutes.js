const express = require('express');
const router = express.Router();
const accommodationActivityHistoryService = require('../services/accommodationActivityHistoryService');

router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const activities = await AccommodationActivityHistory.findAll({ where: { user_id: userId } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching accommodation activities', error: error.message });
    }
});

module.exports = router;
