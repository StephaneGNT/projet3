const express = require('express');
const router = express.Router();
const connection = require('../helper/db.js');

router.get('/getdates', (req, res) => {
  connection.query('SELECT * FROM calendar', (err, results) => {
    if (err) res.status(500);
    else res.json(results);
  });
});

router.post('/adddate', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO calendar SET ?', formData, (err, results) => {
    if (err) res.status(500);
    else res.status(200);
  });
});

router.delete('/deletedate/:id', (req, res) => {
  const formData = req.params.id;
  connection.query('DELETE FROM calendar WHERE id = ?', [formData], err => {
    if (err) res.status(500);
    else res.sendStatus(200);
  });
});

module.exports = router;