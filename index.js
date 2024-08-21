const express = require("express");

const app = express();

const friends = [
  { id: 0, name: "Newton" },
  { id: 1, name: "Einstein" },
  { id: 2, name: "Jack Sparrow" },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // response flowing up here, after the next function
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url}, ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express project</h1>");
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

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
