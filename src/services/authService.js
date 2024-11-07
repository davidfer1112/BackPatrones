const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authService = {
    register: async (name, email, phone, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.create({
            name,
            email,
            phone,
            password_hash: hashedPassword,
        });
    },

    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) throw new Error('Incorrect password');

        // Generar token con el userId y el role
        const token = jwt.sign({ userId: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Retornar userId, role, y token
        return { userId: user.user_id, role: user.role, token };
    },
};

module.exports = authService;
