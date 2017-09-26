var Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/excel-writer-db')

var repairTable = db.define('repairTable', {
    date: Sequelize.STRING,
    needs_by: Sequelize.STRING,
    associate_name: Sequelize.STRING,
    serial_number: Sequelize.STRING,
    warranty: Sequelize.BOOLEAN,
    lock_combo: Sequelize.STRING,
    purchase_origin: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    company_name: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    email: Sequelize.STRING,
    shipping_address: Sequelize.STRING,
    ship_when_complete: Sequelize.BOOLEAN,
    reason_for_repair: Sequelize.STRING
});

// var clientToComplete = db.define('clientToComplete', {
 
// })

module.exports = {db, repairTable};
