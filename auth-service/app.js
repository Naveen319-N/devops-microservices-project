const express = require("express");
const app = express();

app.get("/auth", (req, res) => {
  res.send("Auth Service Working 🔐");
});

app.listen(3001, () => {
  console.log("Auth service running on port 3001");
});