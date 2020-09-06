const express = require("express");
const router = express.Router();

//import the model
const burger = require("../models/burger");

//Create Routes - GET
router.get("/", function(req, res) {
    console.log("burger_controller.js called via GET");
    burger.all(function(data) {

        let burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

//Create Routes - POST
router.post("api/burgers", function(req, res) {
    burger.create(["name, devoured"],

    [req.body.name, req,body.devoured],
    function(result){
        res.json({id: result.insertId});
    });
});

//Create Routes - PUT
router.put("/api/burgers/:id", function(req, res) {
    console.log("burger_controller.js called via PUT");
    let condition = "id = " + req.params.id;
    console.log ("condition", condition);

    burger.update(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
         }  else {
             res.status(200).end();
         } 
    });
});

//Export routes to server.js
module.exports = router;