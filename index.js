const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();
const bookcontroller = require('./controllers/books_controller');

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

app.use(bodyParser.urlencoded({extended: false,}));

app.use(bodyParser.json());

// endpoint restfull books
app.get('/', bookcontroller.getAllData);
app.get('/book/:id', bookcontroller.getDataByID);
app.post('/book', bookcontroller.postBook);
app.put('/book/:id', bookcontroller.updateBook);
app.delete('/book/:id', bookcontroller.deleteBook);
