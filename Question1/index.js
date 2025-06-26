const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("API working for Question 1");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
