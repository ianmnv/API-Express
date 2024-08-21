const friends = require("../models/friends.model");

function postNewFriend(req, res) {
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
}

function getFriends(req, res) {
  res.json(friends);
}

function getOneFriend(req, res) {
  const id = +req.params.id;
  const friend = friends[id];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
}

module.exports = {
  postNewFriend,
  getFriends,
  getOneFriend,
};
