const mysql = require('mysql');
const connection = mysql.createConnection({
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : 'pelicanduturf',
  database: 'pimp_my_cake_admin',
});

module.exports = connection;