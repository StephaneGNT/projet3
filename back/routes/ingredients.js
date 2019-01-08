const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');

// middleware youhouuuuuuu
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

ingred.post('/ingredients/:type/new', (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query('INSERT INTO ? SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.sendStatus(200).send("Nouvel ingrédient ajouté !");
    }
  });
});

module.exports = ingred;