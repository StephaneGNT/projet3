// Déclaration de l'ensemble des librairies nécessaires
const express = require('express');
const picture = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = `./tmp`;
    fs.existsSync(path) || fs.mkdirSync(path);
    // path += `/{UPLOAD_PATH}`, storage
  }
});

picture.post('/api/uploadfile', upload.single('avatar'), async (req, res) => {
  console.log(req.file)
  try {
    res.status(200).end();
  } catch (err) {
    res.status(400);
  }
})

module.exports = picture;
