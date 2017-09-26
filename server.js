const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const PORT = 3000;
const json2xls = require('json2xls');
const fs = require('fs');
const Sequelize = require('sequelize');
var models = require('./models');
var repairTable = models.repairTable;
// var clientToComplete = models.clientToComplete;

app.use(volleyball);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(json2xls.middleware);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
// app.get('/api', (req, res) => {
//     repairTable.findAll().then((result) => res.xls('data.xlsx', ));
// })
app.post('/api/order_form', (req, res) => {
    repairTable.create(req.body);
})

app.get('/api/getAll', (req, res) => {
    repairTable.findAll().then(result => {
        res.json(result);
    }).catch(console.error);
})

app.get("/export", (req, res) => {
    repairTable.findAll({raw: true}).then(result => {
        res.xls('data.xlsx', result)
    }).catch(console.error);
})

repairTable.sync({logging: false, force: false})
.then(function () {
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    });
}).catch(console.error)