// Déclaration de l'ensemble des librairies nécessaires
const express = require('express');
const picture = express.Router();
const multer = require('multer');
// const upload = multer({ dest: './../front/src/Assets/Temp' });
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = `./tmp`;
    // let path = `./../front/src/Assets/Temp`;
    fs.existsSync(path) || fs.mkdirSync(path);
    // path += `/{UPLOAD_PATH}`, storage
  }
});

picture.post('/api/uploadfile', upload.single('avatar'), async (req, res) => {
  try {
    res.status(200).send(res.req.file.filename).end();
  } catch (err) {
    res.status(400);
  }
})

module.exports = picture;
