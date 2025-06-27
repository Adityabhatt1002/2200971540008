const db = require("../data/data");
const generateShortCode = require("../utils/shortCodeGenerator");

exports.createShortURL = (req, res) => {
  const { url, validity = 30, shortcode } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const code = shortcode || generateShortCode();
  const expiry = new Date(Date.now() + validity * 60 * 1000); // validity in minutes

  db[code] = { url, expiry };

  res.status(201).json({
    shortURL: `http://localhost:3000/${code}`,
    expiry
  });
};
