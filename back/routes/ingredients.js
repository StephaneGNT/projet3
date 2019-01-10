const express = require('express');
const ingred = express.Router();
const coco = require('../helper/db.js');

ingred.post('/ingredients/:type', (req, res) => {
  const formData = req.body;
  console.log(formData);
  coco.query('INSERT INTO ? SET ?', formData, (err, results) => {
    if (err) {
      console.log('fatal error: ' + err.message);
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.status(200).send("Nouvel ingrédient ajouté !" + JSON.stringify([results]));
    }
  });
});

module.exports = ingred;