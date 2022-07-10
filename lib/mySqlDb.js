var mysql = require('mysql');
require("dotenv/config");

var newConnection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
    connectionLimit: 10
});

module.exports = newConnection;