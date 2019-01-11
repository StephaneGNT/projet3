const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');

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

ingred.delete('/ingredients/:type/:id', (req, res) => {
  const formData = [req.params.type, req.params.id];
  console.log(formData)
  connection.query('DELETE FROM ?? WHERE id = ?', formData, (err, results) => {
    if (err) res.status(500).json({ message:  "Erreur lors de la suppression" });
    else res.status(200).json({ message:  "Ingrédient supprimé" });
    }
  );
});

module.exports = ingred;