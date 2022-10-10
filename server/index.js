const express = require('express');
const app = express();

const database = require('./models/db');

app.get("/", (req, res) => {
   /*  let SQL = "INSERT INTO users (name, password) VALUES ('Samuel', '123456')"
    database.query(SQL, (err, result) => {
        console.log(err)
    }) */
    res.send("Hello World! - fluxy")
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
    });