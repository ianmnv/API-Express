const express = require("express");

const {
  postNewFriend,
  getFriends,
  getOneFriend,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});
friendsRouter.post("/", postNewFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getOneFriend);

module.exports = friendsRouter;
