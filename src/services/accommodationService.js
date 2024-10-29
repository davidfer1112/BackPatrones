const Accommodation = require('../models/accommodationModel');

const accommodationService = {
    createAccommodation: async (data) => {
        return await Accommodation.create(data);
    },

    getAllAccommodations: async () => {
        return await Accommodation.findAll();
    },
};

module.exports = accommodationService;
