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
    return arr.toString();
}