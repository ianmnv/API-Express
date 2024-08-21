const express = require("express");
const app = express();

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // response flowing up here, after the next function
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.baseUrl}${req.url}, ${delta}ms`);
});

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on port 3000");
});
