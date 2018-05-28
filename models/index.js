const mongoose = require("mongoose");
const User = require("./user");
const Exercise = require("./exercise");
const dotenv = require("dotenv").config();
mongoose.set("debug", true);

mongoose.connect(process.env.MLAB_URI);
mongoose.Promise = Promise;

exports.User = User;
exports.Exercise = Exercise;
