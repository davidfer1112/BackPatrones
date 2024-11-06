const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const accessRoutes = require('./routes/accessRoutes');
const userEventHistoryRoutes = require('./routes/userEventHistoryRoutes');
const userAccommodationHistoryRoutes = require('./routes/userAccommodationHistoryRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', authMiddleware, eventRoutes);
app.use('/api/accommodations', authMiddleware, accommodationRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);
app.use('/api/access', authMiddleware, accessRoutes);
app.use('/api/user-event-history', authMiddleware, userEventHistoryRoutes);
app.use('/api/user-accommodation-history', authMiddleware, userAccommodationHistoryRoutes);

app.use(errorHandler);

module.exports = app;

