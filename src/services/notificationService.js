const Notification = require('../models/notificationModel');

const notificationService = {
    createNotification: async (user_id, message) => {
        return await Notification.create({ user_id, message });
    },

    getNotificationsByUserId: async (userId) => {
        return await Notification.findAll({ where: { user_id: userId } });
    },
};

module.exports = notificationService;
