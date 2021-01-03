const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/swagger/spec.js"],
};

const swaggerSpecification = swaggerJsdoc(options);

module.exports = swaggerSpecification;
