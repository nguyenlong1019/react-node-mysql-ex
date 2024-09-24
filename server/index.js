// Init project
// command 1: npm init -y
// command 2: npm i express mysql nodemon cors
// syntax: npm i package_name 

// Install project: npm i 

import express from "express";
import mysql from "mysql"; 
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@D1019cpu170502',
    database: 'books_db',
});

app.get('/', (req, res) => {
    res.json("Hello world!");
});

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post('/books', (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8888, () => {
    console.log("Server running on port 8888...")
});


// add type: module and start command in package.json 
// npm start