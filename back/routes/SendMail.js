const express = require('express');
const router = express.Router();

var mailGunCredentials = require('../helper/mailGunHelper');

var mailgun = require('mailgun-js')({ apiKey: mailGunCredentials.api_key, domain: mailGunCredentials.DOMAIN });

router.post('/mail', (req, res) => {
    const mailData = {
        'from': req.body.from,
        'to': req.body.to,
        'subject': req.body.title,
        'text': req.body.text,
        'html': req.body.html
    };

    mailgun.messages().send(mailData, function (error, body) {
        if (error) res.status(500).send("Erreur lors de l'envoi")
        else res.status(200).send("Mail bien envoyé")
    });
})

module.exports = router;
