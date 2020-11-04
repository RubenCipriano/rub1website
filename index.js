const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/src'));

app.get('/', (req,res) => {
    res.render('Home')
})

app.post('/contact', (req,res) => {
    console.log(req.body)
    var Email = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'login',
            user: 'rubimessages@gmail.com',
            pass: 'UJF4iv5h7FLkr3F'
        }
    });

    var mailOptions = {
        from: `${req.body.Name}`,
        to: 'rubencipriano13@gmail.com',
        subject: `${req.body.Name} - ${req.body.Subject}`,
        html: `${req.body.Message}`
    }
    Email.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error)
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    })

    res.redirect('/')
})

app.listen(8080)
