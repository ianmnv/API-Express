function getMessages(req, res) {
  res.send("<ul><li>message 1</li><li>message 2</li></ul>");
}

function postMessages(req, res) {
  console.log("Update message");
}

module.exports = {
  getMessages,
  postMessages,
};
