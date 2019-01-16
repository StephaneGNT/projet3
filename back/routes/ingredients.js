const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const secret = require('../helper/jwt_secret');


ingred.use(bodyParser.urlencoded({ extend: true }));
ingred.use(bodyParser.json());

ingred.post(`/ingredients/:type/new`, (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO ? SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.status(200).send("Nouvel ingrédient ajouté !" + JSON.stringify(results));
    }
  });
});


ingred.put(`/ingredients/:id`, (req, res) => {
  const ingredientId = req.params.id;
  const formData = {
    name: req.body.name,
    type: req.body.type,
    size: req.body.size,
    price: req.body.price,
    dispo: req.body.dispo,
    description: req.body.info, 
    image: req.body.img,
    isCompatible: null,
    flavor: null,
    color: null
  }
  connection.query('UPDATE ingredients SET ? WHERE id = ?', [formData, ingredientId], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un ingrédient");
    } else {
      res.status(200).send("Ingrédient modifié !" + JSON.stringify(results));
    }
  })
})



// Identification par token
passport.use(new JWTStrategy(
  {  
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  
    secretOrKey   : secret  
  },  
  (jwtPayload, cb) => {
    return cb(null, jwtPayload);
  }  
));

ingred.delete(
  '/ingredients/:type/:id',
  // jwtAuthentification(),
  passport.authenticate('jwt', {
    session:  false,
    failureRedirect: '/login',
    // failureFlash: 'You need to be logged in',
  }),
  (req, res) => {
    console.log(req.headers)
    const formData = [req.params.type, req.params.id];
    connection.query('DELETE FROM ?? WHERE id = ?', formData, (err, results) => {
      if (err) res.status(500).json({ message:  "Erreur lors de la suppression" });
      else res.status(200).json({ message:  "Ingrédient supprimé" });
      }
    );
  }
);

module.exports = ingred;