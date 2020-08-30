//sql connection
const mysql = require("mysql");
require("dotenv").config();

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,

        port: process.env.DB_PORT,

        user: process.env.DB_USERNAME,

        password: process.env.DB_PASSWORD,
        
        database: process.env.DB_NAME
    });
}

connection.connect(function(err){
    if (err) {
        console.error("connection error: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection
module.exports = connection;