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
  function (name, adminPassword, cb) {
    connection.query('SELECT * FROM admin WHERE name = ?', name, (err, result) => {
      if (err || result.length === 0) cb(null, false, { message: 'Incorrect email or password.' });
      else {
        const user = result[0];
        const hash = result[0].adminPassword;
        const isSame = bcrypt.compareSync(adminPassword, hash);
        if (!isSame) cb(null, false, { message: 'Incorrect email or password.' });
        return cb(null, user, { message: 'Logged In Successfully' });
      }
    })
  }
));

// Authentification login / mot de passe - OK
auth.post('/auth/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    } else {
      req.login(user, { session: false }, (err) => {
        if (err) res.status(500).send(err);
        // generates a signed son web token with the admin_id and returns it in the response
        else {
          const token = jwt.sign(user.name, secret);
          res.status(200).json({ user, token });
        }
      });
    }
  })(req, res);
});

// Ajout d'un nouvel admin - OK
auth.post('/auth/new', (req, res) => {
  // hashage password
  const adminPassword = bcrypt.hashSync(req.body.adminPassword, 10);
  const name = req.body.name;
  connection.query('INSERT INTO admin SET ?', { name, adminPassword }, (err, results) => {
    if (err) res.status(500).send(err);
    return res.status(200).send('Nouvel admin créé');
  })
});

// Mise à jour d'un administrateur
auth.put('/auth/:id', (req, res) => {
  // hashage password
  const adminPassword = bcrypt.hashSync(req.body.newAdmin.adminPassword, 10);
  const adminData = { name: req.body.newAdmin.name, adminPassword }
  connection.query('UPDATE admin SET ? WHERE id = ?', [ adminData, req.params.id ], (err, results) => {
    if (err) res.status(500).send(err);
    return res.status(200).send('Admin mis à jour');
  })
});

module.exports = auth;
