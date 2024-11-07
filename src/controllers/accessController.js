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
            if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

            // Configuración del mensaje según el tipo de acceso
            let subject, text;
            const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/miportal-c92f1.appspot.com/o/logo.png?alt=media&token=dfa80215-1eab-4f56-a81f-45d78a01f3f2';

            if (type === 'event') {
                const event = await Event.findByPk(event_id);
                if (!event) return res.status(404).json({ message: 'Evento no encontrado' });

                subject = `Acceso Confirmado al Evento: ${event.name}`;
                text = `
                    Hola ${user.name},

                    Nos complace informarte que tu acceso al evento "${event.name}" ha sido confirmado.
                    
                    Ubicación: ${event.location}

                    Te esperamos con los brazos abiertos.

                    Saludos cordiales,
                    Equipo Unlock
                    Logo: ${logoUrl}
                `;
            } else if (type === 'accommodation') {
                const accommodation = await Accommodation.findByPk(accommodation_id);
                if (!accommodation) return res.status(404).json({ message: 'Alojamiento no encontrado' });

                subject = `Acceso Confirmado al Alojamiento: ${accommodation.name}`;
                text = `
                    Hola ${user.name},

                    Nos complace informarte que tu acceso al alojamiento "${accommodation.name}" ha sido confirmado.
                    
                    Ubicación: ${accommodation.location}

                    Que tengas una excelente estadía.

                    Saludos cordiales,
                    Equipo Unlock
                    
                `;
            } else {
                return res.status(400).json({ message: 'Tipo de acceso no válido' });
            }

            // Enviamos el correo en texto plano
            await sendEmail(user.email, subject, text);

            res.status(201).json({ message: 'Acceso registrado y correo enviado correctamente', accessLog });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al registrar el acceso y enviar el correo', error: error.message });
        }
    },

    getAccessLogs: async (req, res) => {
        try {
            const logs = await AccessLog.findAll();
            res.json(logs);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los registros de acceso', error: error.message });
        }
    },
};

module.exports = accessController;
