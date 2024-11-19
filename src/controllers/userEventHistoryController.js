const userEventHistoryService = require('../services/userEventHistoryService');
const eventActivityHistoryService = require('../services/eventActivityHistoryService');

const userEventHistoryController = {
    createHistory: async (req, res) => {
        try {
            const { user_id, event_id, status } = req.body;
            const history = await userEventHistoryService.createHistory({ user_id, event_id, status });

            // Registrar actividad inicial
            await eventActivityHistoryService.createActivity({
                user_id,
                event_id,
                action: `History created with status: ${status}`,
            });

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

    updateHistory: async (req, res) => {
        try {
            const { historyId } = req.params;
            const { status } = req.body;
            const updatedHistory = await userEventHistoryService.updateHistory(historyId, { status });

            // Registrar actividad de actualización
            await eventActivityHistoryService.createActivity({
                user_id: updatedHistory.user_id,
                event_id: updatedHistory.event_id,
                action: `Status updated to: ${status}`,
            });

            res.json({ message: 'History updated successfully', updatedHistory });
        } catch (error) {
            res.status(500).json({ message: 'Error updating event history', error: error.message });
        }
    },
};

module.exports = userEventHistoryController;
