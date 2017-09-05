var Sequelize = require('sequelize')
var db = new Sequelize('postgres://SMILODON_2:a@localhost:5432/excel-writer-db')

var myTable = db.define('myTable', {
    title: Sequelize.STRING, 
    name: {
        type: Sequelize.STRING
    },
    orderID: {
        type:Sequelize.INTEGER
    }
});

module.exports = {db, myTable};