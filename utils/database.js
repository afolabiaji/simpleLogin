const Sequelize = require('sequelize')

const sequelize = new Sequelize('simpleLogin', 'postgres', '+vw(Es!v>DJG2ZH!', {
    host: 'database-1.c4c2lkelghen.eu-west-2.rds.amazonaws.com',
    dialect: 'postgres'
})

module.exports = sequelize;d