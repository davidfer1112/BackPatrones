const Notification = require('../models/notificationModel');

const notificationController = {
    createNotification: async (req, res) => {
        try {
            const { user_id, message } = req.body;
            const notification = await Notification.create({ user_id, message });
            res.status(201).json({ message: 'Notification created successfully', notification });
        } catch (error) {
            res.status(500).json({ message: 'Error creating notification', error: error.message });
        }
    },

    getNotificationsByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const notifications = await Notification.findAll({ where: { user_id: userId } });
            res.json(notifications);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching notifications', error: error.message });
        }
    },
};

module.exports = notificationController;
