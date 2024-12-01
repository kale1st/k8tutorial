const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config(); // dotenv configuration

app.get("/", (req, res) => {
  res.send("Hello K8s");
});

app.get("/secret", (req, res) => {
  res.send("my secret: " + process.env.MY_SECRET);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
