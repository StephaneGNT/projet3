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
  } catch (err) {
    res.status(400);
  }
})

router.get('/api/image/get/:imagename', async (req, res) => {
  try{ 
    res.send(fs.readFileSync(
    (path.resolve(`uploaded-images/${req.params.imagename}`)),
    { encoding: 'base64' }))
  } catch (err) {
    res.status(500);
  }
})

router.delete('/api/image/delete/:imagename', (req, res) => {
  const filePath = path.resolve(`uploaded-images/${req.params.imagename}`)
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    res.send(`${filePath} was deleted`);
  });
})

module.exports = router;
