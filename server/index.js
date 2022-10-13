const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/db');


app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

     let SQL = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";

    /* database.query(SQL, [name, email, password], (err, result) => {
        console.log(err)
    }) */

    })

app.listen(3333, () => {
    console.log('Listening on port 3333');
    });