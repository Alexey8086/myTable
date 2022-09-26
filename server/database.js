const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "sweet dreams",
    host: "localhost",
    port: 5432,
    database: "myTable"
})

module.exports = pool