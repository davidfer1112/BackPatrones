const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./userModel');
const Event = require('./eventModel');

const EventActivityHistory = sequelize.define('EventActivityHistory', {
    activity_id: {
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
        allowNull: false,
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'event_id',
        },
        allowNull: false,
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'event_activity_history',
    timestamps: false,
});

module.exports = EventActivityHistory;
