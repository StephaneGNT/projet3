const express = require('express');
const ingred = express.Router();
const coco = require('../helper/db.js');

<<<<<<< HEAD
ingred.post('/ingredients/:type', (req, res) => {
=======
<<<<<<< HEAD
ingred.post('/ingredients/:type/new', (req, res) => {
=======
ingred.use(bodyParser.urlencoded({ extend: true }));
ingred.use(bodyParser.json());

ingred.post(`/ingredients/:type/new`, (req, res) => {
>>>>>>> dev
>>>>>>> 530ab182eda8c4b329af1660312848ae299fb891
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