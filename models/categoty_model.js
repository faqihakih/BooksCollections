const conn = require('./../connection/connection')

module.exports = {
    getAllDatas: () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM kategori";
            conn.query(sql, (err, res) => {
                if (!err) {
                    if (res[0]) {
                        resolve(res)
                    } else {
                        reject({
                            message: 'success',
                            status: true,
                            error: 'Data not Found'
                        })
                    }
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while get data ", err
                    })
                }
            })
        })
    },
    getDataById : (categoryId) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM kategori WHERE id = ?";
            // console.log(sql);
            conn.query(sql,categoryId.id , (err, res) => {
                if (!err) {
                    if (res[0]) {
                        resolve(res)
                    } else {
                        reject({
                            message: 'success',
                            status: true,
                            error: 'Data not Found'
                        })
                    }
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while get data ", err
                    })
                }
            })
        })
    },
    postCategori : (newData) => {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO kategori SET ?";
            conn.query(sql, newData, (err, res) => {
                if (!err) {
                    resolve({
                        message: 'sucess',
                        status: true,
                        data: newData
                    })
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while add an new data ", err
                    })
                }
            })
        })
    },
    updateCategori : (id, newdata) => {
        return new Promise ((resolve, reject) => {
            const sql = "UPDATE kategori SET ? WHERE id = ?";
            conn.query(sql, [newdata, id.id], (err, res) => {
                if (!err) {
                    if (res.affectedRows === 0) {
                        resolve({
                            message: "data not found"
                        })
                    } else {
                        resolve({
                            message : "success",
                            status : true,
                            data : {...id, ...newdata}
                        })
                    }
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while updating data ", err
                    })
                }
            })
        })
    },
    deleteCategory : (id) => {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM kategori WHERE id = ?";
            conn.query(sql, id.id, (err, res) => {
                if (!err) {
                    if (res.affectedRows === 0) {
                        resolve({
                            message: "data not found"
                        })
                    } else {
                        resolve({
                            message : "success",
                            status : true,
                            data : res
                        })
                    }
                } else {
                    reject({
                        message: 'failed',
                        status: false,
                        Error : "Error while deleting data ", err
                    })
                }
            })
        })
    }
}