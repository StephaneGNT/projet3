const express = require('express');
const router = express.Router();
const connection = require('../helper/db.js');

router.get('/getfonts', (req, res) => {
  connection.query('SELECT name FROM fonts', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
    return;
  });
});

router.post('/addfonts', (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query('INSERT INTO fonts SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
    return;
  });
});

router.delete('/deletefonts/:fontName', (req, res) => {
  const formData = req.params.fontName;
  connection.query('DELETE FROM fonts WHERE name = ?', [formData], err => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.sendStatus(500);
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

module.exports = router;