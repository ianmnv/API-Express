const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ id: 1, name: "Newton" });
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>message 1</li><li>message 2</li></ul>");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on port 3000");
});
