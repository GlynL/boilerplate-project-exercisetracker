const express = require("express");
const app = express();
const helpers = require("../helpers/exercises");

app.post("/add", helpers.addExercise);

app.get("/log", helpers.getExercises);

module.exports = app;
