const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: String
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
