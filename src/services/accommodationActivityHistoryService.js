const AccommodationActivityHistory = require('../models/accommodationActivityHistoryModel');

const accommodationActivityHistoryService = {
    createActivity: async (data) => {
        try {
            return await AccommodationActivityHistory.create(data);
        } catch (error) {
            console.error('Error creating activity:', error.message); // Para depuración
            throw error;
        }
    },
};

module.exports = accommodationActivityHistoryService;