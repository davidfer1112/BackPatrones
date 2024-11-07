const UserEventHistory = require('../models/userEventHistoryModel');

const userEventHistoryService = {
    createHistory: async (data) => {
        return await UserEventHistory.create(data);
    },

    getHistoryByUserId: async (userId) => {
        return await UserEventHistory.findAll({ where: { user_id: userId } });
    },

    updateHistory: async (historyId, data) => {
        const history = await UserEventHistory.findByPk(historyId);
        if (!history) throw new Error('History not found');

        await history.update(data);
        return history;
    },
};

module.exports = userEventHistoryService;
