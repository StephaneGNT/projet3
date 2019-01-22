const express = require('express');
const router = express.Router();

var api_key = '7622ef61346e681cb3a2bdec4de55c92-060550c6-99da5662';
var DOMAIN = 'sandbox734cf4997fa7440fade438b0cb88ab79.mailgun.org';

var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

router.post('/mail', (req, res) => {
    const mailData = {
        'from': req.body.from,
        'to': req.body.to,
        'subject': req.body.title,
        'text': req.body.content,
    };

    mailgun.messages().send(mailData, function (error, body) {
        console.log(body)
        if (error) res.status(500).send("ça a foiré")
        else res.status(200).send("OKKK")
    });
})

module.exports = router;
