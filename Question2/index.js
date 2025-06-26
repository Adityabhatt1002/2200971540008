const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("API working for Question 2");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
