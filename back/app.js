// Déclaration de l'ensemble des librairies nécessaires
const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const app = express();
const ingred = require('./routes/ingredients');
const mail = require('./routes/SendMail');
const auth = require('./routes/auth');
const admin = require('./routes/admin');
const customization = require('./routes/customization');
const calendar = require('./routes/calendar');
const uploadFile = require('./routes/uploadFile');
const cake = require('./routes/cakes');
const order = require('./routes/orders');
const customer = require('./routes/customers');
const junctionTable = require('./routes/junction_tables');

// Configuration de l'application
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/",(req,res)=>res.send("hello"))
app.use(ingred);
app.use(auth);
app.use(admin);
app.use('/customization', customization);
app.use('/calendar', calendar);
app.use('/api/send',mail);
app.use(uploadFile);
app.use(cake);
app.use(order);
app.use(customer);
app.use(junctionTable);
app.use('/api/send',mail);


let server = app.listen(5000, function () {
  console.log('Listening on port ' + server.address().port);
});