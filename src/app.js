const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const accessRoutes = require('./routes/accessRoutes');
const userEventHistoryRoutes = require('./routes/userEventHistoryRoutes');
const userAccommodationHistoryRoutes = require('./routes/userAccommodationHistoryRoutes'); // Importa la nueva ruta
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');
const accommodationActivityHistoryRoutes = require('./routes/accommodationActivityHistoryRoutes');
const eventActivityHistoryRoutes = require('./routes/eventActivityHistoryRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', authMiddleware, eventRoutes);
app.use('/api/accommodations', authMiddleware, accommodationRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);
app.use('/api/access', authMiddleware, accessRoutes);
app.use('/api/user-event-history', authMiddleware, userEventHistoryRoutes);
app.use('/api/user-accommodation-history', authMiddleware, userAccommodationHistoryRoutes); // Agrega la ruta del historial de alojamiento
app.use('/api/accommodation-activity-history', accommodationActivityHistoryRoutes);
app.use('/api/event-activity-history', eventActivityHistoryRoutes);

app.use(errorHandler);

module.exports = app;


