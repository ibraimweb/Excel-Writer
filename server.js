const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const PORT = 3000;
const json2xls = require('json2xls');
const fs = require('fs');
const Sequelize = require('sequelize');
var models = require('./models');
var associateToComplete = models.associateToComplete;
var clientToComplete = models.clientToComplete;

app.use(volleyball);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/api', (req, res) => {
    clientToComplete.findAll().then((result)=> res.json(result));
})
app.post('/api/client_form', (req, res) => {
    var date = req.body.date;
    var first_name = req.body.first_name;
    var needs_by = req.body.needs_by;
    var associate_name = req.body.associate_name;
    var serial_number = req.body.serial_number;
    var warranty = req.body.warranty === "on" ? true : false;
    var shipping_address = req.body.shipping_address;
    var purchase_origin = req.body.purchase_origin;
    var last_name = req.body.last_name;
    var company_name = req.body.company_name;
    var phone_number = req.body.phone_number;
    var email = req.body.email;
    var shipping_address = req.body.shipping_address;
    var ship_when_complete = req.body.ship_when_complete === "on" ? true : false;
    var reason_for_repair = req.body.reason_for_repair;
    var lock_combo = req.body.lock_combo;
    clientToComplete.create({first_name, last_name, company_name, phone_number, email, shipping_address, ship_when_complete, reason_for_repair});
    associateToComplete.create({date, needs_by, associate_name, serial_number, warranty, lock_combo, purchase_origin});
})

app.post("/formSubmit", (req, res) => {
    console.log(req.body)
    var xls = json2xls(req.body);
    fs.writeFileSync('data.xlsx', xls, 'binary');
})

models.db.sync({logging: false, force: false})
.then(function () {
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    });
}).catch(console.error)