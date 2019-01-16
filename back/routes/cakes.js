const express = require('express');
const cake = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');

cake.use(bodyParser.urlencoded({ extend: true }));
cake.use(bodyParser.json());

// Enregistrement d'un nouveau cake - OK
cake.post(`/cakes/new`, (req, res) => {
  connection.query('INSERT INTO final_cakes SET ?', req.body, (err, results) => {
    console.log(err, results);
    if (err) {
      res.status(500).send("Erreur lors de l'ajout du gâteau'");
    } else {
      res.status(200).json({ id: results.insertId });
    }
  });
});

// Remplissage de la junction_table final_cake /ingredient
cake.post('/jtcakeingredients', (req, res) => {
  console.log(req.body);
  const formData = {
    id_final_cake: req.body.cakeID,
    id_ingred: req.body.ingredientID
  }
  connection.query('INSERT INTO jt_cake_ingredients SET ?', formData, (err, results) => {
    console.log(err, results);
    if (err) res.status(500).send("Erreur lors de la création de commande");
    else res.status(200).send("Commande enregistrée");
  })
})

// const passport = require('passport');
// const JWTStrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
// const secret = require('../helper/jwt_secret');

// // Identification par token
// passport.use(new JWTStrategy(
//   {  
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  
//     secretOrKey   : secret  
//   },  
//   (jwtPayload, cb) => {
//     return cb(null, jwtPayload);
//   }  
// ));

// ingred.delete(
//   '/ingredients/:type/:id',
//   passport.authenticate('jwt', {
//     session:  false,
//     failureRedirect: '/login',
//   }),
//   (req, res) => {
//     console.log(req.headers)
//     const formData = [req.params.type, req.params.id];
//     connection.query('DELETE FROM ?? WHERE id = ?', formData, (err, results) => {
//       if (err) res.status(500).json({ message:  "Erreur lors de la suppression" });
//       else res.status(200).json({ message:  "Ingrédient supprimé" });
//       }
//     );
//   }
// );

// // Méthode permettant l'envoi d'un message retour
// ingred.delete(
//   '/ingredients/:type/:id',
//   (req, res) => {
//     passport.authenticate('jwt',
//       {
//         session: false,
//         failureRedirect: '/login'
//       },
//       (err, pay) => {
//         if (err) { res.sendStatus(500) }
//         console.log(req.headers)
//         const formData = [req.params.type, req.params.id];
//         connection.query('DELETE FROM ?? WHERE id = ?', formData, (err, results) => {
//           if (err) res.status(500).json({ message: "Erreur lors de la suppression" });
//           else res.status(200).json({ message: "Ingrédient supprimé" });
//         });
//       }
//     )
//   }
// );

module.exports = cake;