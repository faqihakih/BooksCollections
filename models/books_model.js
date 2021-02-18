const conn = require('./../connection/connection')

module.exports = {
    getAllDatas: () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT books.id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN kategori ON books.id_kategori = kategori.id";
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
                        Error : "Error while get data", err
                    })
                }
            })
        })
    },
    getDataById : (booksid) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT books.id, judul, penerbit, penulis, kategori, tahun, cover FROM books JOIN kategori ON books.id_kategori = kategori.id WHERE books.id = ?';
            conn.query(sql,booksid.id, (err, res) => {
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
    postBook : (newData) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO books SET ?";
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
    updatedata : (id, newData) => {
        return new Promise((resolve, reject) => {
            // const sql = `UPDATE books SET judul = '${newData.judul}', penerbit = '${newData.penerbit}', penulis = '${newData.penulis}', id_kategori = '${newData.id_kategori}', tahun = '${newData.tahun}', cover = '${newData.cover}' WHERE id = '${id.id}'`
            const sql = 'UPDATE books SET ? WHERE id = ?'
            conn.query(sql,[newData, id.id], (err, res) => {
                if (!err) {
                    if (res.affectedRows === 0) {
                        resolve({
                            message: "data not found"
                        })
                    } else {
                        resolve({
                            message : "success",
                            status : true,
                            data : {...id, ...newData}
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
    deleteBook : (id) => {
        return new Promise ((resolve, reject) => {
            const sql = "DELETE FROM books WHERE id = ?"
            conn.query(sql, id.id, (err, res) => {
                if (!err) {
                    if (res.affectedRows === 0) {
                        resolve({
                            message: "data not found"
                        })
                    } else {
                        resolve({
                            message : "success",
                            status : true
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