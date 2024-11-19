const express = require('express');
const router = express.Router();
const AccommodationActivityHistory = require('../models/accommodationActivityHistoryModel'); // Importa el modelo

// Endpoint para obtener actividades de alojamiento por usuario
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Consulta a la tabla para obtener las actividades
        const activities = await AccommodationActivityHistory.findAll({ where: { user_id: userId } });

        // Retorna las actividades en formato JSON
        res.status(200).json(activities);
    } catch (error) {
        console.error('Error fetching accommodation activities:', error.message); // Log para depuración
        res.status(500).json({ message: 'Error fetching accommodation activities', error: error.message });
    }
});

module.exports = router;
