const categoryController = require("../controllers/category.handler");

function RoutesApp(app) {
  app.get("/category", categoryController.categoryGETController);
  app.post("/create-category", categoryController.categoryPOSTController);
}

module.exports = { RoutesApp };
