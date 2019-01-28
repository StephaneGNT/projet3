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
const images = require('./routes/images');
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

app.use('/api', ingred);
app.use('/api', auth);
app.use('/api', admin);
app.use('/api/customization', customization);
app.use('/api/calendar', calendar);
app.use('/api/send',mail);
app.use(images);
app.use('/api', cake);
app.use('/api', order);
app.use('/api', customer);
app.use('/api', junctionTable);

let server = app.listen(5000, function () {
  console.log('Listening on port ' + server.address().port);
});
