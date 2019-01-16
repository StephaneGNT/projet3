const express = require('express');
const ingred = express.Router();
const connection = require('../helper/db.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const jwtAuthentification = require('../helper/passport_strategies');


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


/*-------------------- FETCH COMPLETE INCREDIENT TABLES ----------------------*/

ingred.get('/ingredients', (req, res) => {
  connection.query(
    `SELECT ingredients.*, allerg.name AS allergenes, comp.name as compatible
    FROM ingredients 
      LEFT JOIN 
        (SELECT jt_allergenes.id_ingred, GROUP_CONCAT(allergenes.name) AS name
         FROM jt_allergenes
         INNER JOIN allergenes
         ON jt_allergenes.id_allergene = allergenes.id
         GROUP BY jt_allergenes.id_ingred) AS allerg
      ON allerg.id_ingred = ingredients.id
      LEFT JOIN
        (SELECT jt_compatibility.id_ingred1, GROUP_CONCAT(ingredients.name) AS name
         FROM jt_compatibility
         INNER JOIN ingredients
         ON jt_compatibility.id_ingred2 = ingredients.id
         GROUP BY jt_compatibility.id_ingred1) AS comp
      ON comp.id_ingred1 = ingredients.id;` 
    , (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
});

ingred.get('/ingredients/:ingredType', (req, res) => {
  const typeToLoad = req.params.ingredType.replace(/\_/g, ' ');
  console.log(typeToLoad);
  connection.query(
    `SELECT ingredients.*, allerg.name AS allergenes, comp.name as compatible
    FROM ingredients 
      LEFT JOIN 
        (SELECT jt_allergenes.id_ingred, GROUP_CONCAT(allergenes.name) AS name
         FROM jt_allergenes
         INNER JOIN allergenes
         ON jt_allergenes.id_allergene = allergenes.id
         GROUP BY jt_allergenes.id_ingred) AS allerg
      ON allerg.id_ingred = ingredients.id
      LEFT JOIN
        (SELECT jt_compatibility.id_ingred1, GROUP_CONCAT(ingredients.name) AS name
         FROM jt_compatibility
         INNER JOIN ingredients
         ON jt_compatibility.id_ingred2 = ingredients.id
         GROUP BY jt_compatibility.id_ingred1) AS comp
      ON comp.id_ingred1 = ingredients.id
      WHERE ingredients.type = ? ;` 
    , typeToLoad, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
});



module.exports = ingred;