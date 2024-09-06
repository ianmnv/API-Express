const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // response flowing up here, after the 'next' function
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.baseUrl}${req.url}, ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Faceboot | Friend",
    caption: "Wistler is amazing!",
  });
});

// ROUTERS
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});
