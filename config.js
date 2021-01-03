const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: `${path.resolve(__dirname)}/.env` });

const config = {
  env: process.env.ENV,
  port: process.env.PORT,
  secret: process.env.SECRET,
};

module.exports = config;
