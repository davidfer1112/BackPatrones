const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Event = sequelize.define('Event', {
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
    },
    image_url:{
        type: DataTypes.STRING,
    }

}, {
    tableName: 'events',
    timestamps: false,
});

module.exports = Event;
