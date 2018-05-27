const express = require("express");
const helpers = require("../helpers/users");

const app = express();

// create new user
app.post("/new-user", helpers.createUser);

// get all users
app.get("/users", helpers.getUsers);

module.exports = app;
