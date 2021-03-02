import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./src/swagger/apis.ts'],
}

const swaggerSpecification = swaggerJsdoc(options)

export default swaggerSpecification
