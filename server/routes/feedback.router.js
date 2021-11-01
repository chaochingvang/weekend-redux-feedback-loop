const express = require(`express`);
const router = express.Router();
const pool = require(`../modules/pool.js`);

//get request
router.get(`/`, (req, res) => {
  console.log(`in /feedback GET`);

  let queryText = `SELECT * FROM "feedback";`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`ERROR! Unable to GET from db`, error);
      res.sendStatus(500);
    });
});

//post request
router.post(`/`, (req, res) => {
  console.log(`in /feedback POST`);

  // RvdB: Great, this makes it easier to read and follow!
  const feedback = req.body;

  let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

  let values = [
    feedback.feeling,
    feedback.understanding,
    feedback.support,
    feedback.comments,
  ];

  pool
    .query(queryText, values)
    .then((result) => {
      console.log(`/feedback POST successful`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`ERROR! /feedback POST fail!`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
