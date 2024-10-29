const Accommodation = require('../models/accommodationModel');

const accommodationController = {
    createAccommodation: async (req, res) => {
        try {
            const { name, location, contact, event_id } = req.body;
            const accommodation = await Accommodation.create({ name, location, contact, event_id });
            res.status(201).json({ message: 'Accommodation created successfully', accommodation });
        } catch (error) {
            res.status(500).json({ message: 'Error creating accommodation', error: error.message });
        }
    },

    getAccommodations: async (req, res) => {
        try {
            const accommodations = await Accommodation.findAll();
            res.json(accommodations);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching accommodations', error: error.message });
        }
    },
};

module.exports = accommodationController;
