const Event = require('../models/eventModel');

const eventService = {
    createEvent: async (data) => {
        return await Event.create(data);
    },

    getAllEvents: async () => {
        return await Event.findAll();
    },

    getEventById: async (eventId) => {
        const event = await Event.findByPk(eventId);
        if (!event) throw new Error('Event not found');
        return event;
    },

    updateEvent: async (eventId, data) => {
        const event = await Event.update(data, { where: { event_id: eventId } });
        if (!event) throw new Error('Event not found');
        return event;
    },

    deleteEvent: async (eventId) => {
        await Event.destroy({ where: { event_id: eventId } });
    },
};

module.exports = eventService;
