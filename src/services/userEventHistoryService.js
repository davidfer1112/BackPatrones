const UserEventHistory = require('../models/userEventHistoryModel');

const userEventHistoryService = {
    createHistory: async (data) => {
        return await UserEventHistory.create(data);
    },

    getHistoryByUserId: async (userId) => {
        return await UserEventHistory.findAll({ where: { user_id: userId } });
    },

    updateHistoryStatus: async (historyId, status) => {
        return await UserEventHistory.update({ status }, { where: { history_id: historyId } });
    },
};

module.exports = userEventHistoryService;
