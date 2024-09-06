const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}

function postMessages(req, res) {
  console.log("Update message");
}

module.exports = {
  getMessages,
  postMessages,
};
