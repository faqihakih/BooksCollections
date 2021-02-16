const categorysModel = require('../models/categoty_model')

module.exports = {
    getAllData : (req, res) => {
        categorysModel.getAllDatas()
            .then((data) => {
                res.status(200).send({
                    message: 'success',
                    status: true,
                    data: data
                })
            })
            .catch((err) => {
                res.send(err)
            })
    },
    getDataById : (req, res) => {
        const id = req.params;
        // console.log(id);
        categorysModel.getDataById(id)
        .then((data) => {
            res.status(200).send({
                message: 'success',
                status: true,
                data: data
            })
        })
        .catch((err) => {
            res.send(err)
        })
    },
    postCategori : (req, res) => {
        const newData = req.body
        categorysModel.postCategori(newData)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
    updateCategory : (req, res) => {
        const id = req.params;
        const newData = req.body;
        categorysModel.updateCategori(id, newData)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    },
    deleteCategory : (req, res) => {
        const id = req.params;
        categorysModel.deleteCategory(id)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })
    }
}