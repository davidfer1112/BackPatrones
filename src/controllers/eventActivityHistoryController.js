const EventActivityHistory = require('../models/eventActivityHistoryModel');

const eventActivityHistoryController = {
    getActivitiesByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const activities = await EventActivityHistory.findAll({ where: { user_id: userId } });
            res.status(200).json(activities);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching event activities', error: error.message });
        }
    },
};

module.exports = eventActivityHistoryController;
