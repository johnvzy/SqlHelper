var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var app = express()

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'johndb',
    password: '930626',
    database: 'infodb'
})


var publicDir = (__dirname + '/public/')
app.use(express.static(publicDir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/data', (req, res, next) => {
    conn.query("SELECT * FROM info", function (error, result, fields) {
        conn.on('error', function (error) {
            console.log(error)
        })

        if (result && result.length) {
            res.end(JSON.stringify(result, null, "\t"))
        } else {
            res.end(JSON.stringify('No Data found'))
        }
    })
})

app.post('/fetch', (req, res) => {
    let category = req.body.value;
    let query = `SELECT * FROM info where 治療類別 = '${category}'`
    conn.query(query, (error, result, fields) => {
        conn.on('error', function (error) {
            console.log(error)
        })

        if (result && result.length) {
            res.end(JSON.stringify(result, null, "\t"))
        } else {
            res.end(JSON.stringify('No Data found'))
        }
    })
})

app.listen('3001', '0.0.0.0', () => {
    console.log('Server is running..')
})