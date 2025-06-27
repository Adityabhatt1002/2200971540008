const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/", authRoutes); // ✅ mounted route

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
