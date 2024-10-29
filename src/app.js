const express = require('express');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const accessRoutes = require('./routes/accessRoutes');

const app = express();

app.use(express.json());

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/access', accessRoutes);

module.exports = app;
