const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Event = require('./eventModel');

const Accommodation = sequelize.define('Accommodation', {
    accommodation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.STRING,
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'event_id',
        },
        allowNull: true,
    },
}, {
    tableName: 'accommodations',
    timestamps: false,
});

module.exports = Accommodation;
