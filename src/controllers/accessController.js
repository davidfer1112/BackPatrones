const AccessLog = require('../models/accessLogModel');
const User = require('../models/userModel');
const Event = require('../models/eventModel');
const Accommodation = require('../models/accommodationModel');
const { sendEmail } = require('../utils/emailHelper');

const accessController = {
    logAccess: async (req, res) => {
        try {
            const { user_id, event_id, accommodation_id, type } = req.body;
            const accessLog = await AccessLog.create({ user_id, event_id, accommodation_id });

            // Obtenemos los datos del usuario para enviar el correo
            const user = await User.findByPk(user_id);
            if (!user) return res.status(404).json({ message: 'User not found' });

            // Configuración del mensaje según el tipo de acceso
            let subject, text;
            if (type === 'event') {
                const event = await Event.findByPk(event_id);
                if (!event) return res.status(404).json({ message: 'Event not found' });

                subject = `Access Granted to Event: ${event.name}`;
                text = `Hello ${user.name},\n\nYour access to the event "${event.name}" has been confirmed. You may now enter the event. Location: ${event.location}.\n\nBest regards,\nUnlock Team`;
            } else if (type === 'accommodation') {
                const accommodation = await Accommodation.findByPk(accommodation_id);
                if (!accommodation) return res.status(404).json({ message: 'Accommodation not found' });

                subject = `Access Granted to Accommodation: ${accommodation.name}`;
                text = `Hello ${user.name},\n\nYour access to the accommodation "${accommodation.name}" has been confirmed. Location: ${accommodation.location}.\n\nBest regards,\nUnlock Team`;
            } else {
                return res.status(400).json({ message: 'Invalid access type' });
            }

            // Enviamos el correo
            await sendEmail(user.email, subject, text);

            res.status(201).json({ message: 'Access logged successfully and email sent', accessLog });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error logging access and sending email', error: error.message });
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
