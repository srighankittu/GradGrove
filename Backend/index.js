const express = require("express");

const PORT = 3000;

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${3000}`);
});
