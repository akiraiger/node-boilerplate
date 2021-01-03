const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", routes);

module.exports = app;
