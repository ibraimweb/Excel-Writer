var Sequelize = require('sequelize')
var db = new Sequelize('postgres://uyrcxflfwlcgjz:1796a8d4d2230db2a9c62462607114060da4983b2f2a4f65196971f788a0e468@ec2-107-22-235-167.compute-1.amazonaws.com:5432/da6p1eduh7lp8j')

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
