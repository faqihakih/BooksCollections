require('dotenv').config({})
const express = require("express");
const port = process.env.PORT || 8000;
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

// app.get('/', (req, res) => {
//     res.send({
//         "message": "Welcome to API Book Collection",
//         "status": 200,
//         "createdBy": "Faqih Zada Ikhsan",
//         "fullDocumentation": "https://documenter.getpostman.com/view/10969923/TWDWHwsu#bf2d0dbc-2faa-488f-881b-248888c99699"
//     })
// })
// app.use(function (req, res) {
//     res.status(404).json({
//         msg: "Data Not Found",
//         status: 404,
//     });
// });

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
            res.render("indexBook", {
                title : "Books Collections",
                results: results,
            })
        } else {
            throw err;
        }
    });
});
app.get('/addBookView', (req, res) => {
    let sql = "SELECT * FROM kategori";
    conn.query(sql, (err, results) => {
        if (!err) {
            res.render("addBook", {
                title : "Add Book",
                results: results,
            })
        } else {
            throw err;
        }
    });
});
app.post('/saveBook', (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO books SET ?";
    conn.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/');
        }else{
            throw err;
        }
    });
});

app.get('/updateBookView/:id', (req, res) => {
    let booksid = req.params;
    const sql = 'SELECT books.id, judul, penerbit, penulis,kategori.id as catagory, kategori, tahun, cover FROM books JOIN kategori ON books.id_kategori = kategori.id WHERE books.id = ?';
    conn.query(sql,booksid.id, (err, results) => {
    if (!err) {
        res.render("updateBook", {
            title : "Update Book",
            data: results[0],
        })
    } else {
        throw err;
    }
    });
});

app.post('/updateBook', (req, res) => {
    let data = req.body;
    let sql = `UPDATE books SET ? WHERE id = ${data.id}`;
    conn.query(sql, data, (err, results) => {
        // console.log(results);
        if (!err){
            res.redirect('/');
        }else{
            throw err;
        }
    });
});

app.get('/deleteBook/:id', (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM books WHERE id=" + id + "";
    conn.query(sql, (err, results) => {
        if (!err){
            res.redirect('/');
        }else{
            throw err;
        }
    });
});

// endpoint views category
app.get('/categoryView', (req, res) => {
    let sql = "SELECT * FROM kategori";
    conn.query(sql, (err, results) => {
        if (!err) {
            res.render("indexCategory", {
                title : "Category Collection",
                results: results,
            })
        } else {
            throw err;
        }
    });
});
app.get('/addCategoryView', (req, res) => {
    res.render("addCategory", {
        title : "Add Category",
    })
});
app.post('/saveCategory', (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO kategori SET ?";
    conn.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/categoryView');
        }else{
            throw err;
        }
    });
});

app.get('/updateCategoryView/:id', (req, res) => {
    let id = req.params;
    const sql = 'SELECT * FROM kategori WHERE id = ?';
    conn.query(sql, id.id, (err, results) => {
    if (!err) {
        res.render("updateCategory", {
            title : "Update Category",
            data: results[0],
        })
    } else {
        throw err;
    }
    });
});

app.post('/UpdateCategory', (req, res) => {
    let data = req.body;
    let sql = `UPDATE kategori SET ? WHERE id = ${data.id}`;
    conn.query(sql, data, (err, results) => {
        if (!err){
            res.redirect('/categoryView');
        }else{
            throw err;
        }
    });
});

app.get('/deleteCategory/:id', (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM kategori WHERE id=" + id + "";
    conn.query(sql, (err, results) => {
        if (!err){
            res.redirect('/categoryView');
        }else{
            throw err;
        }
    });
});