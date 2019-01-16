const express = require('express');
const order = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
// const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');

order.use(bodyParser.urlencoded({ extend: true }));
order.use(bodyParser.json());

// Enregistrement de la commande finale
order.post(`/orders/new`, (req, res) => {
  connection.query('INSERT INTO final_orders SET ?', req.body, (err, results) => {
    if (err) res.status(500).send("Erreur lors de la commande");
    else res.status(200).send(results);
  });
});

// Enregistrement du custom wishes lié à l'order - OK
order.post('/customwishes/new', (req, res) => {
  console.log(req.body)
  connection.query('INSERT INTO custom_wishes SET ?', req.body, (err, results) => {
    console.log(err, results)
    if (err) res.status(500).send("Erreur lors de l'enregistrement des souhaits");
    else res.status(200).json({ id:results.insertId });
    // else res.status(200).send(results);
  });
});

module.exports = order;