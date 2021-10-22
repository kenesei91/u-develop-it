// inquire express
const express = require('express');

// import mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// query the database to test the connection
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// Default response for any other request (Not Found) or
// create route to handle user requests that aren't supported by app
//ex: http://localhost:3001/try
// Also make sure this route below is placed after get routes if not it
// will override other routes preceeding it
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});