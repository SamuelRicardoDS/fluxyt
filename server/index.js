const express = require('express');
const app = express();

const database = require('./models/db');

app.get("/", (req, res) => {
    let SQL = "INSERT INTO users (nome, email, senha) VALUES ('Samuel', 'samucardiass@gmail.com', 'Macacorosa?1' )";
    database.query(SQL, (err, result) => {
        console.log(err)
    })
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
    });