const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const players = require("./routes/players");

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

app.use(cors());
app.use(express.json());
app.use("/api/players", players);
const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}`));
