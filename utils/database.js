const Sequelize = require('sequelize')

const sequelize = new Sequelize('DB_NAME', 'DB_USER', 'DB_PASSWORD', {
    host: 'DB_ENDPOINT',
    dialect: 'postgres'
})



module.exports = sequelize;