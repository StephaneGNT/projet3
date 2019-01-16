const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');

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

// ingred.delete(
//   '/ingredients//:id',
//   passport.authenticate('jwt', {
//     session:  false,
//     failureRedirect: '/login',
//   }),
//   (req, res) => {
//     connection.query('DELETE FROM ingredients WHERE id = ?', req.params.id, (err, results) => {
//       if (err) res.status(500).json({ message:  "Erreur lors de la suppression" });
//       else res.status(200).json({ message:  "Ingrédient supprimé" });
//       }
//     );
//   }
// );

// Méthode permettant l'envoi d'un message retour
ingred.delete(
  '/ingredients/:id',
  (req, res) => {
    passport.authenticate('jwt',
      {
        session: false,
        failureRedirect: '/login'
      },
      (err, pay) => {
        if (err) { res.sendStatus(500) }
        connection.query('DELETE FROM ingredients WHERE id = ?', req.params.id, (err, results) => {
          if (err) res.status(500).json({ message: "Erreur lors de la suppression" });
          else res.status(200).json({ message: "Ingrédient supprimé" });
        });
      }
    )
  }
);

module.exports = ingred;