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

app.get('/', (req, res) => {
  res.sendFile(path.resolve('server/index.html'));
});

app.post('/add', (req, res) => {
  const state = req.body;
  const sql_in = 'INSERT INTO `masterlist` (`key_id`, `master_id`, `timestamp`, `name`, `saber`, `saber_skill1`, `saber_skill2`, `saber_skill3`, `archer`, `archer_skill1`, `archer_skill2`, `archer_skill3`, `lancer`, `lancer_skill1`, `lancer_skill2`, `lancer_skill3`, `rider`, `rider_skill1`, `rider_skill2`, `rider_skill3`, `caster`, `caster_skill1`, `caster_skill2`, `caster_skill3`, `assassin`, `assassin_skill1`, `assassin_skill2`, `assassin_skill3`, `berserker`, `berserker_skill1`, `berserker_skill2`, `berserker_skill3`, `extra`, `extra_skill1`, `extra_skill2`, `extra_skill3`, `comment`) VALUES (NULL, "'+ state.id +'", "'+ new Date().getTime() +'", "'+ state.name +'", "'+ state.saber +'", "'+ state.saber_skill1 +'", "'+ state.saber_skill2 +'", "'+ state.saber_skill3 +'", "'+ state.archer +'", "'+ state.archer_skill1 +'", "'+ state.archer_skill2 +'", "'+ state.archer_skill3 +'", "'+ state.lancer +'", "'+ state.lancer_skill1 +'", "'+ state.lancer_skill2 +'", "'+ state.lancer_skill3 +'", "'+ state.rider +'", "'+ state.rider_skill1 +'", "'+ state.rider_skill2 +'", "'+ state.rider_skill3 +'", "'+ state.assassin +'", "'+ state.assassin_skill1 +'", "'+ state.assassin_skill2 +'", "'+ state.assassin_skill3 +'", "'+ state.berserker +'", "'+ state.berserker_skill1 +'", "'+ state.berserker_skill2 +'", "'+ state.berserker_skill3 +'", "'+ state.caster +'", "'+ state.caster_skill1 +'", "'+ state.caster_skill2 +'", "'+ state.caster_skill3 +'", "'+ state.extra +'", "'+ state.extra_skill1 +'", "'+ state.extra_skill2 +'", "'+ state.extra_skill3 +'", "'+ state.comment +'")';

  connection.query( sql_in ,
    (err, val, fields) => {
      if (err) { console.log('err: ' + err); }
      res.send({status: 'done'});
    });
});

app.post('/update', (req, res) => {
  const state = req.body;

  const sql_ovw = 'UPDATE `masterlist` SET `name` = "'+ state.name +'", `timestamp` = "'+ new Date().getTime() +'", `saber` = "'+ state.saber +'", `saber_skill1` = "'+ state.saber_skill1 +'", `saber_skill2` = "'+ state.saber_skill2 +'", `saber_skill3` = "'+ state.saber_skill3 +'", `archer` = "'+ state.archer +'", `archer_skill1` = "'+ state.archer_skill1 +'", `archer_skill2` = "'+ state.archer_skill2 +'", `archer_skill3` = "'+ state.archer_skill3 +'", `lancer` = "'+ state.lancer +'", `lancer_skill1` = "'+ state.lancer_skill1 +'", `lancer_skill2` = "'+ state.lancer_skill2 +'", `lancer_skill3` = "'+ state.lancer_skill3 +'", `rider` = "'+ state.rider +'", `rider_skill1` = "'+ state.rider_skill1 +'", `rider_skill2` = "'+ state.rider_skill2 +'", `rider_skill3` = "'+ state.rider_skill3 +'", `caster` = "'+ state.caster +'", `caster_skill1` = "'+ state.caster_skill1 +'", `caster_skill2` = "'+ state.caster_skill2 +'", `caster_skill3` = "'+ state.caster_skill3 +'", `assassin` = "'+ state.assassin +'", `assassin_skill1` = "'+ state.assassin_skill1 +'", `assassin_skill2` = "'+ state.assassin_skill2 +'", `assassin_skill3` = "'+ state.assassin_skill3 +'", `berserker` = "'+ state.berserker +'", `berserker_skill1` = "'+ state.berserker_skill1 +'", `berserker_skill2` = "'+ state.berserker_skill2 +'", `berserker_skill3` = "'+ state.berserker_skill3 +'", `extra` = "'+ state.extra +'", `extra_skill1` = "'+ state.extra_skill1 +'", `extra_skill2` = "'+ state.extra_skill2 +'", `extra_skill3` = "'+ state.extra_skill3 +'", `comment` = "'+ state.comment +'" WHERE `masterlist`.`master_id` = "'+ state.id +'"';

  connection.query( sql_ovw ,
    (err, val, fields) => {
      if (err) { console.log('err: ' + err); }
      res.send({status: 'done'});
    });
});

app.get('/masterlist', (req, res) => {
  connection.query('SELECT * FROM `masterlist` ORDER BY `timestamp` DESC', (err, val, fields) => {
    if (err) { console.log('err: ' + err); }
    let json = val;
    res.send(json);
  });
});

app.get('/servantlist', (req, res) => {
  connection.query('SELECT * FROM `servantlist`;', (err, val, fields) => {
    if (err) { console.log('err: ' + err); }
    let json = val;
    res.send(json);
  });
});

app.listen(8000, (req, res) => {
  console.log('Server is online.');
});
