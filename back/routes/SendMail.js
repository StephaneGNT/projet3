const express = require('express');
const router = express.Router();

var api_key = '7622ef61346e681cb3a2bdec4de55c92-060550c6-99da5662';
var DOMAIN = 'sandbox734cf4997fa7440fade438b0cb88ab79.mailgun.org';

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
        // html: 
    };

    mailgun.messages().send(data1, function (error, body) {
        mailgun.messages().send(data2, function (error, body) {
            console.log(body)
            if (error) res.status(500).send("ça a foiré")
            else res.status(200).send("OKKK")
        });
    });


})

module.exports = router;
