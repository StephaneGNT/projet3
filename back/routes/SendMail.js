const express = require('express');
const router = express.Router();
const mailGunCredentials = require('../helper/mailGunHelper')

var api_key = mailGunCredentials.api_key;
var DOMAIN = mailGunCredentials.DOMAIN;

var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });



router.post('/mail', (req, res) => {

    const data1 = {
        from: 'Pimpmycake <Pimpmycake@Giluna.com>',
        to: req.body.client.email,
        subject: req.body.client.title,
        text: req.body.client.content,
    };
    const data2 = {
        from: 'Pimpmycake <Pimpmycake@Giluna.com>',
        to: req.body.giluna.email,
        subject: req.body.giluna.title,
        html: "<b> Bonjour, </b>" + req.body.giluna.content,
    };

    mailgun.messages().send(data1, function (error, body) {
        mailgun.messages().send(data2, function (error, body) {
            console.log(body)
            if (error) res.status(500).send("Erreur")
            else res.status(200).send("Succès")
        });
    });
});

module.exports = router;
