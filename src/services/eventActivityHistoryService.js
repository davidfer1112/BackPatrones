const EventActivityHistory = require('../models/eventActivityHistoryModel');

const eventActivityHistoryService = {
    createActivity: async (data) => {
        try {
            return await EventActivityHistory.create(data);
        } catch (error) {
            console.error('Error creating event activity:', error.message);
            throw error;
        }
    },
};

module.exports = eventActivityHistoryService;
