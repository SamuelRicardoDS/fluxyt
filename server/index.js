const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/db');

/* app.get("/", (req, res) => {
    let SQL = "INSERT INTO users (nome, email, senha) VALUES ('Samuel', 'samucardiass@gmail.com', 'Macacorosa?1' )";
    database.query(SQL, (err, result) => {
        console.log(err)
    })
}); */

app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    let SQL = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";

    database.query(SQL, [name, email, password], (err, result) => {
        console.log(err)
      })

    })

app.listen(3333, () => {
    console.log('Listening on port 3333');
    });