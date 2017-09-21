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
    clientToComplete.create(req.body);
})
app.post("/formSubmit", (req, res) => {
    console.log(req.body)
    var xls = json2xls(req.body);
    fs.writeFileSync('data.xlsx', xls, 'binary');
})

models.db.sync({logging: false, force: true})
.then(function () {
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    });
}).catch(console.error)

