const express = require('express');
const router = express.Router();
const connection = require('../helper/db.js');

router.get('/getfonts', (req, res) => {
  connection.query('SELECT name FROM fonts', (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
    return;
  });
});

router.post('/addfonts', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO fonts SET ?', formData, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).send('OK');
    }
    return;
  });
});

router.delete('/deletefonts/:fontName', (req, res) => {
  const formData = req.params.fontName;
  connection.query('DELETE FROM fonts WHERE name = ?', [formData], err => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send();
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.status(200).send("ok");
    }
  });
});

router.get('/getcustomprices', (req, res) => {
  const formData = req.body;
  connection.query('SELECT * FROM custom_prices', formData, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
    return;
  });
});

router.put('/updatecustomprices', (req, res) => {
  const sqlQuery = 'UPDATE custom_prices SET price = ? WHERE id = ?'; 
  connection.query(sqlQuery, [req.body.price, req.body.id], (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).send('OK');
    }
    return;
  });
});



module.exports = router;