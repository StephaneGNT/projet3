const express = require('express');
const authRouter = express.Router();
const connection = require('../../helpers/db.js');

authRouter.post('/signup', (req, res, next) => {
  connection.query(`INSERT INTO users (id, email, password, name, lastname) VALUES (?,?,?,?,?)`,
  [null, req.body.email, req.body.password, req.body.firstName, req.body.lastName],  
  (error, results, fields)=> {
    if (error) res.status(500).json({ flash:  error.message });
    else res.status(200).json({ flash:  "User has been signed up !" });
  });
});

module.exports = authRouter;