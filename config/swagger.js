const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Saint Seiya API',
      version: '1.0.0',
      description: 'API de ejemplo para caballeros del zodiaco',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Servidor local',
      },
    ],
  },
  // Archivos donde Swagger buscará anotaciones (rutas)
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📘 Swagger disponible en: http://localhost:5000/api-docs');
};

module.exports = swaggerDocs;
