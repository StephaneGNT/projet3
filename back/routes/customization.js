const express = require('express');
const router = express.Router();
const connection = require('../helper/db.js');


router.post('/addfonts', (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query('INSERT INTO fonts SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.sendStatus(200).send("Nouvel ingrédient ajouté !");
    }
  });
});