const express = require('express');
const path = require('path');

// Configuración
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar el servidor de Express
app.listen(PORT, () => {
    console.log(`\nServidor corriendo en http://localhost:${PORT}`);
});