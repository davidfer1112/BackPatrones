const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./userModel');
const Accommodation = require('./accommodationModel');

const UserAccommodationHistory = sequelize.define('UserAccommodationHistory', {
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
    accommodation_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Accommodation,
            key: 'accommodation_id',
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
    tableName: 'user_accommodation_history',
    timestamps: false,
});

module.exports = UserAccommodationHistory;
