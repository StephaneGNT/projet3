const express = require('express');
const router = express.Router();

var api_key = '31516c404e325b1aa8129d8c3d38c9b8-3939b93a-b4d6a96f';
var DOMAIN = 'sandbox54ba418ab9ef4f97b6ff5df6a9467ecf.mailgun.org';

var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });



router.post('/mail', (req, res) => {
    console.log("dans node", req.body)
    // const data = {
    //     from: 'Quêtes Wild <wild@wild.com>',
    //     to: req.body.email,
    //     subject: req.body.title,
    //     text: req.body.content,
    // };
    // mailgun.messages().send(data, function (error, body) {

    //     console.log(error, body);
    //     if (error) res.sendStatus(500)
    //     else res.send("ok")
    // });


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
