const mysql = require('mysql');
const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pelicanduturf',
  database: 'pimp_my_cake_admin',
});

module.exports = con;