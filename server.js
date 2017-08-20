const express = require('express')
const app = express();
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const PORT = 3000;

app.use(volleyball);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.post("/formSubmit", (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

