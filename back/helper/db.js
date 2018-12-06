const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'New4Pass415Ordi_',
});
module.exports  =  connection;