const mysql = require('mysql');

const db = mysql.createPool({
    host: '',
    port: '',
    user: '',
    password: '',
    database: ''
});

module.exports = db;