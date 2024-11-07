const UserAccommodationHistory = require('../models/userAccommodationHistoryModel');

const userAccommodationHistoryService = {
    createHistory: async (data) => {
        return await UserAccommodationHistory.create(data);
    },

    getHistoryByUserId: async (userId) => {
        return await UserAccommodationHistory.findAll({ where: { user_id: userId } });
    },

    updateHistory: async (historyId, data) => {
        const history = await UserAccommodationHistory.findByPk(historyId);
        if (!history) throw new Error('History not found');

        await history.update(data);
        return history;
    },
};

module.exports = userAccommodationHistoryService;
