const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const connection = require('../helper/db.js');

const DIR = 'uploaded-images/';

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

let upload = multer({ storage: storage });

router.post('/api/image/upload', upload.single('avatar'), async (req, res) => {
  const data = { name: req.file.filename, type: req.file.mimetype, size: req.file.size }
  try {
    res.status(200).send(data.name).end();
    connection.query('INSERT INTO images SET ?', data, (err, result) => {});
  } catch (err) {
    res.status(400);
  }
})

router.get('/api/image/get/:imagename', (req, res) => {
  console.log(req.params.imagename)
  res.send(fs.readFileSync(
    (path.resolve(`uploaded-images/${req.params.imagename}`)),
    { encoding: 'base64' }))
})

module.exports = router;
