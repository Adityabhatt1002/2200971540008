const db = require("../data/db");
const { v4: uuidv4 } = require("uuid");

exports.register = (req, res) => {
  const { name, email, rollNo } = req.body;
  if (!name || !email || !rollNo) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const clientID = uuidv4();
  const clientSecret = uuidv4();

  db[rollNo] = { name, email, clientID, clientSecret };

  res.status(201).json({ clientID, clientSecret });
};

exports.auth = (req, res) => {
  const { name, email, rollNo, clientID, clientSecret, accessCode } = req.body;

  if (!accessCode || accessCode !== "12345678") {
    return res.status(403).json({ error: "Invalid access code" });
  }

  const user = db[rollNo];

  if (!user || user.clientID !== clientID || user.clientSecret !== clientSecret) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = uuidv4(); // You can use JWT instead if needed

  res.status(200).json({
    token_type: "Bearer",
    access_token: token,
    expires_in: Date.now() + 60 * 60 * 1000
  });
};
