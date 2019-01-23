const express = require('express');
const router = express.Router();

var api_key = '7dd28c8ac43fe8639d9bfee6273452b0-060550c6-b0fba8db';
var DOMAIN = 'sandbox627d9c845056459f95b1034eeaff791d.mailgun.org';

var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

router.post('/mail', (req, res) => {
    console.log('send mail body:', req.body)
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
