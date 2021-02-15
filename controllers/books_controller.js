const booksModel = require('../models/books_model')

module.exports = {
    getAllData : (req, res) => {
        booksModel.getAllDatas()
            .then((data) => {
                res.status(200).send({
                    message: 'success',
                    status: true,
                    data: data
                })
            })
            .catch((error) => {
                res.send(error)
            })
    },
    getDataByID : (req, res) => {
        const booksid = req.params;
        booksModel.getDataById(booksid)
        .then((data) => {
            res.status(200).send({
                message: 'success',
                status: true,
                data: data
            })
        })
        .catch((error) => {
            res.send(error)
        })
    },
    postBook: (req, res) => {
        const newData = req.body
        booksModel.postBook(newData)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
    updateBook : (req, res) => {
        const id = req.params;
        const newData = req.body;
        booksModel.updatedata(id, newData)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
    deleteBook : (req, res) => {
        const id = req.params;
        booksModel.deleteBook(id)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    }
}