const mysql = require('mysql');
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const conn = mysql.createConnection({
    user    : DB_USERNAME,
    password    :DB_PASSWORD,
    host    : DB_HOST,
    database    : DB_DATABASE
});

conn.connect((error) => {
    error ? console.log('connection error : '+error) : console.log('database connected');
})

module.exports = conn;