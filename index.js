const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const bookcontroller = require('./controllers/books_controller');
const categoricontroller = require('./controllers/category_controller');
const conn = require("./connection/connection");

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false, }));
app.use(bodyParser.json());

// endpoint restfull books
app.get('/book', bookcontroller.getAllData);
app.get('/book/:id', bookcontroller.getDataByID);
app.post('/book', bookcontroller.postBook);
app.put('/book/:id', bookcontroller.updateBook);
app.delete('/book/:id', bookcontroller.deleteBook);

// endpoint restfull category
app.get('/category', categoricontroller.getAllData);
app.get('/category/:id', categoricontroller.getDataById);
app.post('/category', categoricontroller.postCategori);
app.put('/category/:id', categoricontroller.updateCategory);
app.delete('/category/:id', categoricontroller.deleteCategory);

// endpoint views book
app.get('/', (req, res) => {
    let sql = "SELECT books.id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN kategori ON books.id_kategori = kategori.id";
    conn.query(sql, (err, results) => {
        if (!err) {
            res.render("index", {
                title : "Welcome",
                results: results,
            })
        } else {
            throw err;
        }
    });
});