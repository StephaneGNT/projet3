const express = require('express');
const customer = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');

customer.use(bodyParser.urlencoded({ extend: true }));
customer.use(bodyParser.json());

// Création d'un nouveau client - Fonctionne
customer.post(`/customer/new`, (req, res) => {
  connection.query('INSERT INTO customers SET ?', req.body, (err, results) => {
    if (err) res.status(500).send("Erreur lors de la création du client");
    else res.status(200).json({id: results.insertId});
  });
});

// Récupération de l'id d'un client avec son mail- Fonctionne
customer.post(`/customer`, (req, res) => {
  console.log(req.body);
  connection.query('SELECT id FROM customers WHERE email = ?', req.body.email, (err, results) => {
    if (err) res.status(500).send([]);
    else res.status(200).send(results[0]);
  });
});

// Récupération de tous les clients - Fonctionne
customer.get(`/customers/all`, (req, res) => {
  connection.query('SELECT * FROM customers', (err, results) => {
    if (err) res.status(500).send([]);
    else res.status(200).send(results);
  });
});

module.exports = customer;