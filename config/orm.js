//import sql connection
const connection = require("../config/connection.js");

//sql syntax helper
function printQuestionMarks(num) {
    const arr = [];

    for(let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//convert object key-value pairs to sql
function objToSql(ob) {
    const arr = [];

// loop keys & push key-value to array
for (const key in ob) {
    const value = ob[key];

    if(Object.hasOwnProperty.call(ob, key)) {

        if(typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
//convert arrays to single string
    return arr.toString();
}
//sql statement functions object
const orm = {
    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
        cb(result);
    });
    },
    
create: function(table, cols, vals, cb){
    val[1] = false;
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
    });
},


update: function(table, condition, cb) {
    console.log(condition);

    let queryString = "UPDATE" + table;

    queryString += " SET devoured = true";
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
  }
};
//export orm to model
module.exports = orm;