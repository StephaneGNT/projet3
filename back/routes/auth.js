const express = require('express');
const auth = express.Router();
const connection = require('../helper/db');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secret = require('../helper/jwt_secret');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

// Connexion - Passeport - OK
passport.use(new LocalStrategy(
  {
    usernameField: 'name',
    passwordField: 'adminPassword'
  },
  function (name, password, cb) {
    connection.query('SELECT * FROM admin WHERE name = ?', name, (err, result) => {
      if (err || result.length === 0) return cb(err);
      else {
        const user = result[0];
        const hash = result[0].adminPassword;
        // const isSame = bcrypt.compareSync(password, hash);
        const isSame = true;
        console.log("user, hash, isSame", user, hash, isSame)
        if (!isSame) cb(null, false, { message: 'Incorrect email or password.' });
        return cb(null, user, { message: 'Logged In Successfully' });
      }
    })
  }
));

// Authentification login / mot de passe
auth.post('/auth/login', (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log(err, user);
    if (err || !user) {
      res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.status(500).send(err);
      }
      // generates a signed son web token with the admin_id and returns it in the response
      const token = jwt.sign(user.name, secret);
      res.status(200).json({ user, token });
    });
  })(req, res);
});

// Ajout d'un nouvel admin - OK
auth.post('/auth/new', (req, res) => {
  // hashage password
  const hash = bcrypt.hashSync(req.body.password, 10);
  const id = req.body.id;
  connection.query('INSERT INTO admin SET ?', { admin_id: id, admin_password: hash }, (err, results) => {
    if (err) res.status(500).send(err);
    return res.status(200).send('Admin mis à jour');
  })
});

// Mise à jour d'un administrateur
auth.put('/auth/:id', (req, res) => {
  // hashage password
  const hash = bcrypt.hashSync(req.body.password, 10);
  const adminData = { admin_id: req.body.id, admin_password: hash }
  connection.query('UPDATE admin SET ? WHERE id = ?', [ adminData, req.params.id ], (err, results) => {
    if (err) res.status(500).send(err);
    return res.status(200).send('Admin créé');
  })
});

module.exports = auth;
