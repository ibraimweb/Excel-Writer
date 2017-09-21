var Sequelize = require('sequelize')
var db = new Sequelize('postgres://SMILODON_2:a@localhost:5432/excel-writer-db')

var associateToComplete = db.define('associateToComplete', {
    date: Sequelize.STRING,
    needs_by: Sequelize.STRING,
    associate_name: Sequelize.STRING,
    serial_number: Sequelize.STRING,
    warranty: Sequelize.BOOLEAN,
    lock_combo: Sequelize.STRING,
    purchase_origin: Sequelize.STRING
});

var clientToComplete = db.define('clientToComplete', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    company_name: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    email: Sequelize.STRING,
    shipping_address: Sequelize.STRING,
    ship_when_complete: Sequelize.BOOLEAN,
    reason_for_repair: Sequelize.STRING
})

module.exports = {db, associateToComplete, clientToComplete};
