const express = require('express');
const router = express.Router();
const Caballero = require('../models/caballeroModel');

/**
 * @swagger
 * /buscar-caballero:
 *   get:
 *     summary: Busca un caballero por su nombre
 *     description: Devuelve la información del caballero si existe.
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         description: Nombre del caballero a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resultado de la búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 found:
 *                   type: boolean
 *                   example: true
 *                 caballero:
 *                   type: object
 *                   properties:
 *                     nombre:
 *                       type: string
 *                       example: Seiya
 *                     constelacion:
 *                       type: string
 *                       example: Pegaso
 *                     poderes:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["Meteoros de Pegaso", "Cometa de Pegaso"]
 */
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
