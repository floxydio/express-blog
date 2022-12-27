const express = require("express");
const app = express();
const PORT = 9901;
const routes = require("../routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// For Body Formdata
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Set Cors For Web Browser
app.use(cors());

// Route List
routes.RoutesApp(app);

// Listen App
app.listen(PORT, function () {
  console.log("Server Running on 9901");
});
