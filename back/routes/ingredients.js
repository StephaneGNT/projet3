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




ingred.use(bodyParser.json());
ingred.use(bodyParser.urlencoded({ extended: true }));

ingred.post('/ingredients/new', (req, res) => {
  console.log(req.body)
  connection.query('INSERT INTO ingredients SET ?', req.body, (err, results) => {
    console.log(err, results);
    if (err) {
      res.status(500).send("Erreur lors de l'ajout d'un ingrédient");
    } else {
      res.status(200).json((results));
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

// créer un nouvel allegène
// ingred.post('/allergenes/new', (req, res) => {
//   console.log(req.body)
//   connection.query('INSERT INTO allergenes SET ?', req.body, (err, results) => {
//     console.log(err, results);
//     if (err) {
//       res.status(500).send("Erreur lors de l'ajout d'un allèrgène");
//     } else {
//       res.status(200).json((results));
//     }
//   });
// });

ingred.get('/ingredients/name', (req, res) => {
  console.log(req.body)
  connection.query('SELECT * from ingredients', (err, results) => {
    if (err) { 
        res.status(500).send('Erreur lors de la recup des noms');
    } else { 
        res.send([results]);
    }
});
});

ingred.get('/allergenes/name', (req, res) => {
  console.log(req.body)
  connection.query('SELECT * from allergenes', (err, results) => {
    if (err) { 
        res.status(500).send('Erreur lors de la recup des allergenes');
    } else { 
        res.send([results]);
    }
});
});

ingred.post('/jtingredients', (req, res) => {
  connection.query('INSERT INTO jt_compatibility SET ?', req.body, (err, response) => {
    if (err) res.status(500).send("Erreur");
    else res.status(200).send("Compatibilité(s) ajoutée(s)");
  })
})

ingred.post('/jtallergenes', (req, res) => {
  connection.query('INSERT INTO jt_allergenes SET ?', req.body, (err, response) => {
    if (err) res.status(500).send("Erreur");
    else res.status(200).send("Allergène(s) ajouté(s)");
  })
})


// Identification par token
passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
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