const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
//Swagger js Declaration
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Bessppl.com API",
        description: "Bessppl.com  API Information",
        contact: {
          name: "SDC Team"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// define a simple route
/**
 * @swagger
 * /:
 *  get:
 *    description: Welcome Page
 *    responses:
 *      '200':
 *        description: A successful response
 */


app.get('/', (req, res) => {
    res.json({"message": "Welcome to Bessppl.com"});
});

// Harish Route

/**
 * @swagger
 * /harish:
 *  get:
 *    description: Welcome Page
 *    responses:
 *      '200':
 *        description: A successful response
 */


app.get('/harish', (req, res) => {
    res.json({"message": "Welcome Harish"});
});
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});