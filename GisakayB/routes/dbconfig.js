var mysql = require('mysql');
var con = mysql.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbdatabase
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to the database!");
});

module.exports = con;