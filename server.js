const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const PORT = 3000;
const json2xls = require('json2xls');
const fs = require('fs');
var models = require('./models');

app.use(volleyball);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/api', (req, res) => {
    models.myTable.findAll().then((result)=> res.json(result));
})
app.post('/api', (req, res) => {
    models.myTable.create(req.body);
})
app.post("/formSubmit", (req, res) => {
    console.log(req.body)
    var xls = json2xls(req.body);
    fs.writeFileSync('data.xlsx', xls, 'binary');
})

models.myTable.sync({logging: false, force: false})
.then(function () {
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    });
}).catch(console.error)

