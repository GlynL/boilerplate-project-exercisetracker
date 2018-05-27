const db = require("../models/index");

exports.getUsers = (req, res) => db.User.find().then(users => res.json(users));

exports.createUser = function(req, res) {
  db.User.create({ username: req.body.username }, (err, user) =>
    res.json({ username: user.username, id: user._id })
  );
};
