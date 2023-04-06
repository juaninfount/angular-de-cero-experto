const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();
// crear el servidor de aplicaciones express

const app = express();

// base de datos
dbConnection();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.listen(process.env.PORT, () => { 

    console.log(`Servidor corriendo en puerto ${process.env.PORT}.`);
});
