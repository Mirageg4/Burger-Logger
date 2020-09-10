//sql connection
const mysql = require("mysql2");
require("dotenv").config();

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    connection = mysql.createConnection({
        host: d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com //process.env.DB_HOST,

        port: 3306 //process.env.DB_PORT,

        user: //process.env.DB_USERNAME,

        password: b1ga0o7vznp8erxr //process.env.DB_PASSWORD,
        
        database: o89ual6tmjsl4mbu//process.env.DB_NAME
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