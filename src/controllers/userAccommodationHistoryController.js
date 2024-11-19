const userAccommodationHistoryService = require('../services/userAccommodationHistoryService');
const accommodationActivityHistoryService = require('../services/accommodationActivityHistoryService');

const userAccommodationHistoryController = {
    createHistory: async (req, res) => {
        try {
            const { user_id, accommodation_id, status } = req.body;
            const history = await userAccommodationHistoryService.createHistory({ user_id, accommodation_id, status });

            // Registrar actividad inicial
            await accommodationActivityHistoryService.createActivity({
                user_id,
                accommodation_id,
                action: `History created with status: ${status}`,
            });

            res.status(201).json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error creating accommodation history', error: error.message });
        }
    },

    getHistoryByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const history = await userAccommodationHistoryService.getHistoryByUserId(userId);
            res.status(200).json(history);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching accommodation history', error: error.message });
        }
    },

    updateHistory: async (req, res) => {
        try {
            const { historyId } = req.params;
            const { status } = req.body;
            const updatedHistory = await userAccommodationHistoryService.updateHistory(historyId, { status });

            console.log('Creating activity for history update...');
            // Registrar actividad de actualización
            const activity = await accommodationActivityHistoryService.createActivity({
                user_id: updatedHistory.user_id,
                accommodation_id: updatedHistory.accommodation_id,
                action: `Status updated to: ${status}`,
            });
            console.log('Activity created:', activity);

            res.json({ message: 'History updated successfully', updatedHistory });
        } catch (error) {
            console.error('Error in updateHistory:', error.message); // Depuración
            res.status(500).json({ message: 'Error updating accommodation history', error: error.message });
        }
    },
};

module.exports = userAccommodationHistoryController;
