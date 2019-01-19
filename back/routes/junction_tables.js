const express = require('express');
const junctionTable = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');

junctionTable.use(bodyParser.urlencoded({ extend: true }));
junctionTable.use(bodyParser.json());

// Remplissage de la junction_table final_cake /ingredient
junctionTable.post('/jtcakeingredients', (req, res) => {
  const formData = {
    id_final_cake: req.body.cakeID,
    id_ingred: req.body.ingredientID
  }
  connection.query('INSERT INTO jt_cake_ingredients SET ?', formData, (err, results) => {
    if (err) res.status(500).send("Erreur lors de la création de commande");
    else res.status(200).send("Commande enregistrée");
  })
});


// Remplissage de la junction_table customer / order
junctionTable.post('/jtclientorder', (req, res) => {
  console.log(req.body);
  const formData = {
    id_customer: req.body.customerID,
    id_order: req.body.orderID
  }
  connection.query('INSERT INTO jt_customers_orders SET ?', formData, (err, results) => {
    console.log(err, results);
    if (err) res.status(500).send("Erreur lors de la création de commande");
    else res.status(200).send("Commande enregistrée");
  })
});

module.exports = junctionTable;