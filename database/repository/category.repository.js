const database = require("../db");

function categoryGET(callback) {
  database.connection.query("SELECT * FROM category", function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

function categoryPOST(body, callback) {
  database.connection.query(
    `INSERT INTO category(category) VALUES ('${body.category}')`,
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

module.exports = { categoryGET, categoryPOST };
