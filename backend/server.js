const express = require("express");
const app = express();
// const port = 3306;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001");
});

const mysql = require("mysql");

// sql 연동
const db = mysql.createConnection({
  user: "youngje0102",
  host: "localhost",
  password: "Eddie0806@@",
  database: "condb",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("DB is Connected");
});
// API Server
app.get("/user", (req, res) => {
  const sql = "SELECT * FROM condb.user;";
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
