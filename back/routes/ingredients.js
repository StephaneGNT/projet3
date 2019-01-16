const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');

ingred.use(bodyParser.urlencoded({ extended: true }));
ingred.use(bodyParser.json());

ingred.post('/ingredients/new', (req, res) => {
  connection.query('INSERT INTO ingredients SET ?', req.body, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.status(200).send("Nouvel ingrédient ajouté !" + JSON.stringify(results));
    }
  });
});

const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const secret = require('../helper/jwt_secret');

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
    connection.query('DELETE FROM ingredients WHERE id = ?', formData, (err, results) => {
      if (err) res.status(500).json({ message:  "Erreur lors de la suppression" });
      else res.status(200).json({ message:  "Ingrédient supprimé" });
      }
    );
  }
);

module.exports = ingred;