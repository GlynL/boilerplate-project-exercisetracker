const db = require("../models");

exports.addExercise = function(req, res) {
  // create current date if not provided
  if (!req.body.date) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; /* returns 0 -> 11 for some reason */
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    req.body.date = formattedDate;
  }
  // check all required fields are filled
  if (!req.body.userId || !req.body.description || !req.body.duration)
    return res.send("missing field");
  // create new exercise
  db.Exercise.create(req.body).then(addedExercise => res.json(addedExercise));
};

// ?{userId}[&from][&to][&limit]
// 5b0a24344ad2e1213ccea722
exports.getExercises = function(req, res) {
  const id = req.query.userId;
  const limit = Number(req.query.limit) || 0;
  const fromDate = req.query.from || "0000-00-00";
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
*/
