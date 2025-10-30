const Caballero = require('../models/caballeroModel');

const caballerosIniciales = [
  {
    nombre: 'Seiya',
    constelacion: 'Pegaso',
    imagen: 'https://example.com/seiya.jpg',
    genero: 'Masculino',
    poderes: ['Meteoros de Pegaso', 'Cometa de Pegaso']
  },
  {
    nombre: 'Shiryu',
    constelacion: 'Dragón',
    imagen: 'https://example.com/shiryu.jpg',
    genero: 'Masculino',
    poderes: ['Cólera del Dragón', 'Dragón Naciente']
  },
  {
    nombre: 'Hyoga',
    constelacion: 'Cisne',
    imagen: 'https://example.com/hyoga.jpg',
    genero: 'Masculino',
    poderes: ['Polvo de Diamantes', 'Ejecución de Aurora']
  },
  {
    nombre: 'Shun',
    constelacion: 'Andrómeda',
    imagen: 'https://example.com/shun.jpg',
    genero: 'Masculino',
    poderes: ['Cadena Nebular', 'Tormenta Nebular']
  },
  {
    nombre: 'Ikki',
    constelacion: 'Fénix',
    imagen: 'https://example.com/ikki.jpg',
    genero: 'Masculino',
    poderes: ['Ave Fénix', 'Ilusión Diabólica del Fénix']
  },
];

const seedCaballeros = async () => {
  try {
    const count = await Caballero.countDocuments();

    if (count === 0) {
      await Caballero.insertMany(caballerosIniciales);
      console.log('🌟 Caballeros iniciales insertados correctamente.');
    } else {
      console.log('⚠️ Ya existen caballeros en la base de datos, no se insertaron nuevos.');
    }
  } catch (error) {
    console.error('❌ Error al insertar los caballeros iniciales:', error.message);
  }
};

module.exports = seedCaballeros;
