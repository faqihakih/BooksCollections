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


app.get('/', bookcontroller.getAllData);
