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
    res.end('render success')
})
server.listen('3001', '127.0.0.1', () => {
    console.log('Server is running..')
})