const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./userModel');
const Accommodation = require('./accommodationModel');

const AccommodationActivityHistory = sequelize.define('AccommodationActivityHistory', {
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
    accommodation_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Accommodation,
            key: 'accommodation_id',
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
    tableName: 'accommodation_activity_history',
    timestamps: false,
});

module.exports = AccommodationActivityHistory;
