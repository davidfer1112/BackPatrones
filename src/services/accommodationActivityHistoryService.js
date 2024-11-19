const AccommodationActivityHistory = require('../models/accommodationActivityHistoryModel');

const accommodationActivityHistoryService = {
    createActivity: async (data) => {
        return await AccommodationActivityHistory.create(data);
    },
};

module.exports = accommodationActivityHistoryService;
