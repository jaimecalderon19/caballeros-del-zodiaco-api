const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const caballerosRoutes = require('./routes/caballeros.routes');
const seedCaballeros = require('./seed/caballerosSeeder');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
connectDB().then(async () => {
  // Ejecutar el seeder
  await seedCaballeros();
});

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', caballerosRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});