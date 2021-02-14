const conn = require('./../connection/connection')

module.exports = {
    getAllDatas : () => {
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
                    reject(err)
                }
            })
        })
    }
}