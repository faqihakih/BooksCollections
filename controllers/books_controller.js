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
    }
}