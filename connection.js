const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port: 5433,
    password: "hajra",
    database: "project_sample"
})
module.exports = client