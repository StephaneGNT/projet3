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

// MAJ de la junction_table jt_compatibility
junctionTable.post('/jtingredients/add', (req, res) => {
  connection.query('INSERT INTO jt_compatibility SET ?', req.body, (err, results) => {
    if (err) res.status(500).send('Erreur lors de l\'ajout d\'une compatibilites');
    else res.status(200).send('Ajout d\'une compatibilite enregistrée')
  })
})

junctionTable.delete('/jtingredients/del/:id2/:id1', (req, res) => {
  const formData = [
    req.params.id2,
    req.params.id1,
  ];
  connection.query('DELETE FROM jt_compatibility WHERE id_ingred2 = ? AND id_ingred1 = ?', formData, (err, results) => {
    if (err) res.status(500).send('Erreur lors de la suppresion d\'une compatibilites');
    else res.status(200).send('Suppression d\'une compatibilite enregistrée')
  })
})

// MAJ de la junction_table jt_allergenes
junctionTable.post('/jtallergenes/add', (req, res) => {
  connection.query('INSERT INTO jt_allergenes SET ?', req.body, (err, results) => {
    if (err) res.status(500).send('Erreur lors de l\'ajout d\'un allergene');
    else res.status(200).send('Ajout d\'un allergene enregistré')
  })
})

junctionTable.delete('/jtallergenes/del/:id1/:id2', (req, res) => {
  const formData = [
    req.params.id1,
    req.params.id2
  ];
  connection.query('DELETE FROM jt_allergenes WHERE id_allergene = ? AND id_ingred = ?', formData, (err, results) => {
    if (err) res.status(500).send('Erreur lors de la suppresion d\'un allergene');
    else res.status(200).send('Suppression d\'un allergene enregistré')
  })
})

// Remplissage de la junction_table customer / order
junctionTable.post('/jtclientorder', (req, res) => {
  const formData = {
    id_customer: req.body.customerID,
    id_order: req.body.orderID
  }
  connection.query('INSERT INTO jt_customers_orders SET ?', formData, (err, results) => {
    if (err) res.status(500).send("Erreur lors de la création de commande");
    else res.status(200).send("Commande enregistrée");
  })
});

module.exports = junctionTable;