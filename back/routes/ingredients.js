const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');

// ingred.post('/ingredients/:type/new', (req, res, next) => {
//   connection.query(`INSERT INTO ? (id, name, type, size, price, dispo, info, img, allerg, compatible) VALUES (?,?,?,?,?,?,?,?,?)`,
//   [null, req.params.name, req.params.type, req.params.type, req.params.size, req.params.price, req.params.dispo, req.params.info, req.params.img, req.params.allerg, req.params.compatible]  
//   (error, results, fields)=> {
//     if (error) res.status(500).json({ flash:  error.message });
//     else res.status(200).json({ flash:  "Nouvel ingrédient ajouté !" });
//   });
// });

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