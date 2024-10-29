const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./userModel');
const Event = require('./eventModel');
const Accommodation = require('./accommodationModel');

const AccessLog = sequelize.define('AccessLog', {
    access_log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'event_id',
        },
        allowNull: true,
    },
    accommodation_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Accommodation,
            key: 'accommodation_id',
        },
        allowNull: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'access_logs',
    timestamps: false,
});

module.exports = AccessLog;
