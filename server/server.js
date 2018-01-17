const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();


// DB connect settings
const connection = mysql.createConnection({
  host     : process.env.NODE_DB_HOST,
  user     : process.env.NODE_DB_USER,
  password : process.env.NODE_DB_PASSWORD,
  port     : process.env.NODE_DB_PORT,
  database : process.env.NODE_DB_NAME
});

// server settings
app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.resolve('server/index.html'));
});

app.get('/masterlist', function (req, res) {
  connection.query('SELECT * FROM `masterlist`;', function (err, val, fields) {
    if (err) { console.log('err: ' + err); }
    let json = val;
    res.send(json);
  });
});

app.get('/servantlist', function (req, res) {
  connection.query('SELECT * FROM `servantlist`;', function (err, val, fields) {
    if (err) { console.log('err: ' + err); }
    let json = val;
    res.send(json);
  });
});

app.listen(8000, function (req, res) {
  console.log('Server is online.');
});
