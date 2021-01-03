const app = require("./src/app");
const logger = require("./src/logger");
const { port } = require("./config");

app.listen(port, () => {
  logger.info(`App started and listening on port ${port}`);
});
