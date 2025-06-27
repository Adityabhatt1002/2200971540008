const axios = require("axios");

const logger = async (req, res, next) => {
  const logData = {
    stack: "backend",
    level: "debug",
    message: `${req.method} ${req.url}`,
    timestamp: new Date().toISOString(),
    package: "url-shortener"
  };

  try {
    await axios.post("http://20.244.56.144/evaluation-service/logs", logData);
  } catch (error) {
    console.log("Logging failed:", error.message);
  }

  next();
};

module.exports = logger;
