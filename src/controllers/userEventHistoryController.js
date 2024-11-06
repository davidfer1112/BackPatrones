const userEventHistoryService = require('../services/userEventHistoryService');

const userEventHistoryController = {
    createHistory: async (req, res) => {
        try {
            const { user_id, event_id, status } = req.body;
            const history = await userEventHistoryService.createHistory({ user_id, event_id, status });
            res.status(201).json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error creating event history', error: error.message });
        }
    },

    getHistoryByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const history = await userEventHistoryService.getHistoryByUserId(userId);
            res.json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching event history', error: error.message });
        }
    },
};

module.exports = userEventHistoryController;
