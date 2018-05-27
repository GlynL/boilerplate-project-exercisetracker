const mongoose = require("mongoose");
const User = require("./user");
const Exercise = require("./exercise");

mongoose.set("debug", true);

mongoose.connect(process.env.MLAB_URI || "mongodb://localhost/exercise-track");
mongoose.Promise = Promise;

exports.User = User;
exports.Exercise = Exercise;
