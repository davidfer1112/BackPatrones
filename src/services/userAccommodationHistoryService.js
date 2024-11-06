const UserAccommodationHistory = require('../models/userAccommodationHistoryModel');

const userAccommodationHistoryService = {
    createHistory: async (data) => {
        return await UserAccommodationHistory.create(data);
    },

    getHistoryByUserId: async (userId) => {
        return await UserAccommodationHistory.findAll({ where: { user_id: userId } });
    },

    updateHistoryStatus: async (historyId, status) => {
        return await UserAccommodationHistory.update({ status }, { where: { history_id: historyId } });
    },
};

module.exports = userAccommodationHistoryService;
