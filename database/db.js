const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "my_blog",
});

connection.connect(function (err) {
  if (err) console.log(`Error When Connecting -> ${err}`);
   
  console.log("Database Connected");
});

module.exports = { connection };
