const app = require('./app'); // Importa `app.js` desde `src`
const sequelize = require('./config/config'); // Importa la configuración de la base de datos desde `src/config`
require('dotenv').config();

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
        return sequelize.sync(); // Sincroniza los modelos con la base de datos
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
