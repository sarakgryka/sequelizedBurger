const express = require("express");

const orm = require("./config/orm")

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));
// app.use(express.static("./views"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.


var router = require("./controllers/burgers_controller");

app.use(router);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});