const db = require("../models");

exports.addExercise = function(req, res) {
  // create current date if not provided
  if (!req.body.date) {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1; /* returns 0 -> 11 for some reason */
    if (month < 10) month = `0${month}`; /* ensure standard formatting for consitency & search accuracy */
    let day = date.getDate();
    if (day < 10) day = `0${day}`;
    const formattedDate = `${year}-${month}-${day}`;
    req.body.date = formattedDate;
  }
  // check all required fields are filled
  if (!req.body.userId || !req.body.description || !req.body.duration)
    return res.send("missing field");
  // create new exercise
  db.Exercise.create(req.body).then(addedExercise => res.json(addedExercise));
};

exports.getExercises = function(req, res) {
  const id = req.query.userId;
  const limit = Number(req.query.limit) || 0;
  const fromDate = req.query.from || "0000-00-00";
  console.log(req.query.from);
  const toDate = req.query.to || "9999-12-31";
  db.Exercise.find({ userId: id })
    .where("date")
    .gte(fromDate)
    .lte(toDate)
    .limit(limit)
    .then(log => {
      res.json(log);
    })
    .catch(err => res.send(err));
};

/* 
TODO:
* move stuff into middlewares?
  - what are middlewares exactly
* tidy code
* add 0 to automatic date
*/
