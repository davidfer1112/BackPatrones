const userAccommodationHistoryService = require('../services/userAccommodationHistoryService');

const userAccommodationHistoryController = {
    createHistory: async (req, res) => {
        try {
            const { user_id, accommodation_id, status } = req.body;
            const history = await userAccommodationHistoryService.createHistory({ user_id, accommodation_id, status });
            res.status(201).json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error creating accommodation history', error: error.message });
        }
    },

    getHistoryByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const history = await userAccommodationHistoryService.getHistoryByUserId(userId);
            res.json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching accommodation history', error: error.message });
        }
    },

    updateHistory: async (req, res) => {
        try {
            const { historyId } = req.params;
            const { status } = req.body;
            const updatedHistory = await userAccommodationHistoryService.updateHistory(historyId, { status });
            res.json({ message: 'History updated successfully', updatedHistory });
        } catch (error) {
            res.status(500).json({ message: 'Error updating accommodation history', error: error.message });
        }
    },
};

module.exports = userAccommodationHistoryController;
