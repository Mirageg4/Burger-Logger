//sql connection
const mysql = require("mysql2");
require("dotenv").config();

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    connection = mysql.createConnection({
        host: "localhost", //process.env.DB_HOST,

        port: 3306, //process.env.DB_PORT,

        user: "root", //process.env.DB_USERNAME,

        password: "mirageg411", //process.env.DB_PASSWORD,
        
        database: "burgersDB" //process.env.DB_NAME
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