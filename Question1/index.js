const express = require("express");
const app = express();
const urlRoutes = require("./routes/urlRoutes");
const logger = require("./middleware/logger");

app.use(express.json());
app.use(logger);
app.use("/", urlRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
