const AccessLog = require('../models/accessLogModel');

const accessService = {
    logAccess: async (data) => {
        return await AccessLog.create(data);
    },

    getAllAccessLogs: async () => {
        return await AccessLog.findAll();
    },
};

module.exports = accessService;
