const Event = require('../models/eventModel');

const eventController = {
    createEvent: async (req, res) => {
        try {
            const { name, description, date_time, location, image_url, price } = req.body;
            const event = await Event.create({ name, description, date_time, location, image_url, price });
            res.status(201).json({ message: 'Event created successfully', event });
        } catch (error) {
            res.status(500).json({ message: 'Error creating event', error: error.message });
        }
    },

    getEvents: async (req, res) => {
        try {
            const events = await Event.findAll();
            res.json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching events', error: error.message });
        }
    },

    getEventById: async (req, res) => {
        try {
            const { eventId } = req.params;
            const event = await Event.findByPk(eventId);
            if (!event) return res.status(404).json({ message: 'Event not found' });
            res.json(event);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching event', error: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const { eventId } = req.params;
            const { name, description, date_time, location, image_url, price } = req.body;
            const event = await Event.update({ name, description, date_time, location, image_url, price }, { where: { event_id: eventId } });
            res.json({ message: 'Event updated successfully', event });
        } catch (error) {
            res.status(500).json({ message: 'Error updating event', error: error.message });
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const { eventId } = req.params;
            await Event.destroy({ where: { event_id: eventId } });
            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting event', error: error.message });
        }
    },
};

module.exports = eventController;
