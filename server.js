const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content from the "public" directory
app.use(express.static("public"));

//Parse application body
app.use(express.urlencoded({extened: true}));
app.use(express.json());

//Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import Routes
const routes = require("./controllers/burger_controller.js");

app.use(routes);

//Start Server listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

