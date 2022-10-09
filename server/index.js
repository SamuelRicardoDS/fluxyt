const express = require('express');
const app = express();
const mysql = require("mysql")

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "MySQL Model"
})

app.get("/", (req, res) => {
    let SQL = "INSERT INTO users (name, password) VALUES ('Samuel', '123456')"
    database.query(SQL, (err, result) => {
        console.log(err)
    })
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
    });