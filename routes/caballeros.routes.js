const express = require('express');
const router = express.Router();
const Caballero = require('../models/caballeroModel');

// GET /buscar-caballero?nombre=Seiya
router.get('/buscar-caballero', async (req, res) => {
  const { nombre } = req.query;

  console.log('Buscando caballero con nombre:', nombre);

  if (!nombre) {
    return res.status(400).json({ error: 'Debes proporcionar un nombre' });
  }

  try {
    const caballero = await Caballero.findOne({ nombre: new RegExp(`^${nombre}$`, 'i') });
    if (caballero) {
      res.json({ found: true, caballero });
    } else {
      res.json({ found: false, message: 'Caballero no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al buscar el caballero' });
  }
});

module.exports = router;
