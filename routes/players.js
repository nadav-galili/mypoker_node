const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "poker_demo",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connection successs");
});

router.get("/", async (req, res) => {
  await connection.query("SELECT * FROM players", (err, results, fields) => {
    console.log(results);
    res.status(200).send(results);
  });
});

module.exports = router;
