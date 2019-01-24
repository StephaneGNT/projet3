Add a file "db.js" that contains :

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : *your password* (string format),
  database : *the database name* (string format)
});
module.exports  =  connection;

----------------------------------------------------------------------------------------------

Add a file "jwt_secret.js" that contains :

const secret = *your secret* (string format);

module.exports = secret;


----------------------------------------------------------------------------------------------

Add a file mailGunHelper.js that contains :

const mailGunCredentials = {
  api_key: your mailGun key (string format),
  DOMAIN: your domain name (string format),
}

module.exports = mailGunCredentials;
