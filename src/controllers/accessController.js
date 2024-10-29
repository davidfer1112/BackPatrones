const AccessLog = require('../models/accessLogModel');

const accessController = {
    logAccess: async (req, res) => {
        try {
            const { user_id, event_id, accommodation_id } = req.body;
            const accessLog = await AccessLog.create({ user_id, event_id, accommodation_id });
            res.status(201).json({ message: 'Access logged successfully', accessLog });
        } catch (error) {
            res.status(500).json({ message: 'Error logging access', error: error.message });
        }
    },

    getAccessLogs: async (req, res) => {
        try {
            const logs = await AccessLog.findAll();
            res.json(logs);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching access logs', error: error.message });
        }
    },
};

module.exports = accessController;
