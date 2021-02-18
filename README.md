# Book Collection RESTful API

----------------

## About The Project

Ini adalah dokumentasi api dari Book Collections.

Projek ini adalah projek membuat sebuah Backend Beginner untuk halaman web yang mencakup beberapa Endpoint untuk bisa di konsumi sebagai data di bagian web.

#### Built With

- [ExpressJS](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)

- [Pug](https://pugjs.org/api/getting-started.html)


#### Schema Database

![ ](https://res.cloudinary.com/zada/image/upload/v1613666570/screenshot-localhost-2021.02.18-22_11_25_wkbpka.png)


## Getting Started

Berikut adalah langkah-langkah panduan supaya project ini bisa dijalankan secara local : 

#### Step yang harus diikuti

1. Clone repository

```textile
git clone https://github.com/faqihakih/BooksCollections
```

2. Install paket pendukung dalam `node_module`
- Jika anda menggunakan NPM

```textile
npm install
```

- Jika anda menggunakan Yarn

```textile
yarn
```

3. Konfigurasi Database , silahkan sesuaikan pada halaman index.js

```js
const conn = mysql.createConnection({
    user    : 'username',
    password    :'password',
    host    : 'hostname',
    database    : 'databaseName'
});
```

### Berikut adalah Documentasi API


untuk documentasi silahkan klik link di bawah
[Book Collectins API - Publik](https://documenter.getpostman.com/view/6626576/TVewYPbM)


#### LICENSE

Distributed under the MIT License. See [LICENSE](https://github.com/faqihakih/BooksCollections/blob/main/LICENSE) for more information.