const express = require("express");

const app = express();

const friends = [
  { id: 0, name: "Newton" },
  { id: 1, name: "Einstein" },
  { id: 2, name: "Jack Sparrow" },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = +req.params.id;
  const friend = friends[id];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>message 1</li><li>message 2</li></ul>");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on port 3000");
});
