const express = require('express');
const customer = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');

customer.use(bodyParser.urlencoded({ extend: true }));
customer.use(bodyParser.json());

// Création d'un nouveau client - Fonctionne
customer.post(`/customer/new`, (req, res) => {
  console.log(req.body);
  connection.query('INSERT INTO customers SET ?', req.body, (err, results) => {
    console.log(err, results);
    if (err) {
      res.status(500).send("Erreur lors de la création du client");
    } else {
      res.status(200).send((results));
    }
  });
});

// Récupération de l'id d'un client avec son mail- Fonctionne
customer.get(`/customer`, (req, res) => {
  connection.query('SELECT id FROM customers WHERE email = ?', req.body.email, (err, results) => {
    if (err) {
      res.status(500).send([]);
    } else {
      res.status(200).send(results[0]);
    }
  });
});

module.exports = customer;