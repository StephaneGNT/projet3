const express = require('express');
const admin = express.Router();
const connection = require('../helper/db');

// Récupération d'un admin (pour vérification avant le POST) - OK
admin.get(
  '/admin',
  // jwtAuthentification(),
  (req, res) => {
    connection.query('SELECT * FROM admin WHERE admin.admin_id = ?',
    req.body.id, (err, result) => {
      if (err) res.status(500).send(err);
      if (result) res.status(200).send(result);
    })
  }
)

// Récupération de tous les admin - OK
admin.get(
  '/admin/all',
  // jwtAuthentification(),
  (req, res) => {
    connection.query('SELECT * FROM admin', (err, result) => {
      if (err) res.status(500).send("Erreur lors de la récupération des admin");
      if (result) res.status(200).send(result);
    })
  }
)

// Suppression d'un administrateur - OK
admin.delete(
  '/admin/:id',
  // jwtAuthentification(),
  (req, res) => {
    connection.query('DELETE FROM admin WHERE id = ?', req.params.id, (err, result) => {
      if (err) res.status(500).send("Erreur lors de la suppression");
      if (result) res.status(200).send("Admin supprimé");
    })
  }
)

// Mise à jour de la description homePage / aboutUs
admin.put(
  '/admin/descriptions/new',
  (req, res) => {
    connection.query('UPDATE descriptions SET ? WHERE id=1', req.body, (err, results) => {
      if (err) res.status(500);
      else res.status(200);
    })
  }
)

admin.get(
  '/admin/descriptions',
  (req, res) => {
    connection.query('SELECT * FROM descriptions', (err, results) => {
      if (err) res.status(500)
      if (results) res.status(200).json({data: results})
    })
  }
)

module.exports = admin;