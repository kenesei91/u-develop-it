// import mysql2
const mysql = require('mysql2');

// Code to connect the application to MYSQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'KeNe19(!',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;