const express = require("express");
const app = express();

const {
  getMessages,
  postMessages,
} = require("./controllers/messages.controller");

const {
  postNewFriend,
  getFriends,
  getOneFriend,
} = require("./controllers/friends.controller");

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

app.post("/friends", postNewFriend);
app.get("/friends", getFriends);
app.get("/friends/:id", getOneFriend);

app.get("/messages", getMessages);
app.post("/messages", postMessages);

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on port 3000");
});
