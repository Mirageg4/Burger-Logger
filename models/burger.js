// Import ORM to use with database
const orm = require("../config/orm.js");

let burgerModel = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(condition, cb) {
        orm.update("burgers", condition, function(res) {
            cb(res);
        });
    }
};

//Export database functions for the controller
module.exports = burgerModel;