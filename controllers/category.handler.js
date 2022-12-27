const repo = require("../database/repository/category.repository");

function categoryGETController(req, res) {
  repo.categoryGET(function (err, result) {
    if (err) {
      res.status(400).send({
        message: "Something Went Wrong",
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: "Successfully Get Data Category",
      });
    }
  });
}

function categoryPOSTController(req, res) {
  repo.categoryPOST(req.body, function (err, result) {
    if (err) {
      res.status(400).send({
        message: "Something Went Wrong",
      });
    } else {
      res.status(201).send({
        status: 201,
        message: "Successfully Create Category",
      });
    }
  });
}

module.exports = { categoryGETController, categoryPOSTController };
