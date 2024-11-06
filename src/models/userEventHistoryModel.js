const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./userModel');
const Event = require('./eventModel');

const UserEventHistory = sequelize.define('UserEventHistory', {
    history_id: {
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
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['active', 'inactive']],
        },
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_event_history',
    timestamps: false,
});

module.exports = UserEventHistory;
