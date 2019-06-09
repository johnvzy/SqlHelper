var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var http = require('http')

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'johndb',
    password: '930626',
    database: 'infodb'
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(__dirname)
    res.end('render success')
})

var app = express()
var publicDir = (__dirname + '/public/')
app.use(express.static(publicDir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

server.listen('3001', '127.0.0.1', () => {
    console.log('Server is running..')
})